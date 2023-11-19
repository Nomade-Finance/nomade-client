import './_conversion.scss'

import { ApiData, FormData } from '@types-nomade/types'
import React, { useCallback, useEffect, useState } from 'react'
import { fetchBitcoinRate, fetchExchangeRate, fetchUSDCRate } from '@api/api'

import AutorenewIcon from '@mui/icons-material/Autorenew'
import Button from '@components/Button/Button'
import { CryptoData } from '../../interfaces/interfaces'
import { ListePaiement } from '@data/paymentsList'
import { ListeToken } from '@data/tokensList'
import NomadeNumberInput from '@components/Inputs/Number/Number'
import NomadeSelect from '@components/Inputs/Select/Select'
import SwapSummary from '@components/OutPuts/Display/Resume'

function Conversion () {
  //  Definition des constantes
  const TRANSACTION_FEE = 0.03 // Frais de transaction 3%
  //  Données du formulaire
  const [acchat, setVente] = useState(true) // État du bouton de commutation (true: J'achète, false: Je Vends)
  const handleSwitchChange = () => setVente(!acchat) // Fonction pour changer l'état du bouton de commutation
  const [amount, setAmount] = useState(0) // Montant de la transaction
  const [crypto, setCrypto] = useState('') // Crypto-monnaie sélectionnée
  const [payment, setPayment] = useState('') // Méthode de paiement sélectionnée
  //  -------------------------------------------------------

  //  Données de l'api
  const [apiData, setApiData] = useState<ApiData>({
    exchangeRate: 0,
    bitcoinRate: 0,
    usdcRate: 0
  })
  const { exchangeRate, bitcoinRate, usdcRate } = apiData
  const [cryptoData] = useState<CryptoData[]>([]) // Données des crypto-monnaies
  const [error, setError] = useState<string | null>(null) // Erreur de connexion
  const [total, setTotal] = useState<number>(0) // Montant total de la transaction
  const fees = acchat ? Number((total * TRANSACTION_FEE).toFixed(0)) : 0
  //  -------------------------------------------------------

  // Gestion des erreurs
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [inputError, setInputError] = useState<string | null>(null) // Erreur de Montant
  const handleInputError = (error: string | null) => {
    setInputError(error) // Mettre à jour l'erreur de Montant
  }

  //  Si le montant est valide, effacer le message d'erreur
  React.useEffect(() => {
    if (amount > 0) {
      setErrorMessage(null)
    }
  }, [amount])
  //  -----------------------------------------------------

  //  Fonction pour récupérer les données de l'api
  const fetchData = useCallback(async () => {
    try {
      const rate = await fetchExchangeRate() // Récupérer le taux de change depuis l'API
      const bitcoinRate = await fetchBitcoinRate() // Récupérer le taux de change du Bitcoin depuis l'API
      const usdcRate = await fetchUSDCRate() // Récupérer le taux de change de l'USDC depuis l'API

      // Mettre à jour l'état apiData avec les données récupérées
      setApiData({ exchangeRate: rate, bitcoinRate, usdcRate })
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Erreur de connexion à l\'api')
      }
    }
  }, [])

  // Calculer le montant total de la transaction
  useEffect(() => {
    const cryptoRate = crypto === 'bitcoin' ? bitcoinRate : usdcRate // Sélectionner le taux de change en fonction de la crypto-monnaie choisie
    const totalInUSD = amount * cryptoRate // Calculer le montant total en USD
    const totalInCFA = totalInUSD * exchangeRate // Calculer le montant total en CFA
    setTotal(totalInCFA) // Mettre à jour le montant total de la transaction
  }, [amount, crypto, exchangeRate, bitcoinRate, usdcRate])
  // ---------------------------------------------------------------------------------
  // Récupérer les données de l'api au chargement de la page
  useEffect(() => {
    fetchData() // Appeler la fonction fetchData au chargement de la page
  }, [fetchData])

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount) // Mettre à jour le montant de la transaction
  }

  const handleCryptoChange = (newCrypto: string) => {
    setCrypto(newCrypto) // Mettre à jour la crypto-monnaie sélectionnée
    const cryptoRate = cryptoData.find(cryptoItem => cryptoItem.id === newCrypto)?.current_price // Récupérer le taux de change de la crypto-monnaie sélectionnée
    if (cryptoRate) {
      const totalInUSD = amount * cryptoRate // Calculer le montant total en USD
      const totalInCFA = totalInUSD * exchangeRate // Calculer le montant total en CFA
      setTotal(totalInCFA) // Mettre à jour le montant total de la transaction
    }
  }

  const handlePaymentChange = (newPayment: string) => {
    setPayment(newPayment) // Mettre à jour la méthode de paiement sélectionnée
    // Mettre à jour le taux d'échange ici
  }

  // ---------------------------------------------------
  const coins = ListeToken.map((token) => ({
    value: token.symbol,
    label: token.nom,
    icon: token.icone
  })) // Options de sélection des crypto-monnaies

  const paiements = ListePaiement.map((paiement) => ({
    value: paiement.symbole,
    label: paiement.symbole,
    icon: paiement.icone
  })) // Options de sélection des méthodes de paiement
  // ---------------------------------------------------

  // Gestion du formulaire
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData | null>(null)
  useEffect(() => {
  // Si le montant, la crypto-monnaie et la méthode de paiement sont valides, effacer le message d'erreur
    if (amount > 0 && crypto && payment) {
      setErrorMessage(null)
    }
  }, [amount, crypto, payment])
  // Afficher les données du formulaire dans la console alert
  useEffect(() => {
    if (formData) {
      console.log(JSON.stringify(formData, null, 2))
    }
  }, [formData])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault() // Empêcher le formulaire de rafraîchir la page

    // Validation des donnêes du formulaire
    if (amount <= 0 || !crypto || !payment) {
      setErrorMessage('Tous les champs doivent être valides')
      return
    }
    setIsLoading(true) // Afficher le spinner de chargement
    //  Mettre à jour les données du formulaire
    setFormData({
      acchat,
      amount,
      fromCurrency: crypto,
      toCurrency: payment,
      total: total + (fees === 0 ? 0 : parseFloat(fees.toString())),
      fees
    })

    // Simulate the delay of the alert dialog
    setTimeout(() => {
      setIsLoading(false) // Set isLoading to false after the alert is closed
    }, 2000) // Adjust the delay as needed
  }
  // Fonction pour gérer le clic sur le bouton d'achat ou de vente
  const handleButtonClick = (event: React.MouseEvent) => {
  // Empêcher le formulaire de rafraîchir la page
    event.stopPropagation()
  }
  // ---------------------------------------------------------------

  return (
    <form onSubmit={handleSubmit}>

      {/* Champs de saisie du montant, de la crypto-monnaie et de la méthode de paiement */}
      <div id="top-box">
        <Button
          icon={<AutorenewIcon sx={{ fontSize: '1.1em' }} />}
          iconPosition='right'
          className={acchat ? 'button-vert' : 'button-orange'}
          type='button'
          onClick={handleSwitchChange}
          label={acchat ? "J'achète" : 'Je Vends'} // Texte du bouton de commutation
        />

        {/* Champ de saisie du montant */}
        <NomadeNumberInput
        onInputError={handleInputError}
        placeholder="MONTANT"
        onChange={handleAmountChange} />

       {/* Sélecteur de crypto-monnaie */}
        <NomadeSelect
          options={coins}
          placeholder="CRYPTOS"
          onChange={handleCryptoChange}
          formatOptionLabel={(data) => {
            const option = data as { label: string; icon: React.ReactElement }
            return (
              <>
                {option.label}
                {option.icon}
              </>
            )
          }}
        />

        {/* Texte indiquant le sens de l'échange */}
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            placeContent: 'center',
            justifySelf: 'center',
            minWidth: '100px'
          }}
        >
          {acchat ? 'Avec' : 'Contre'}
        </p>

        {/* Sélecteur de méthode de paiement */}
        <NomadeSelect
          options={paiements}
          placeholder="PAIEMENTS"
          onChange={handlePaymentChange}
          formatOptionLabel={(data) => {
            const option = data as { label: string; icon: React.ReactElement }
            return (
              <>
                {option.label}
                {option.icon}
              </>
            )
          }}
        />
      </div>

      {/* Résumé de la transaction */}
      <div id="bottom-box">
        <SwapSummary
          amount={amount}
          fromCurrency={crypto}
          toCurrency={payment}
          total={total}
          error={error} // Ceci est L'erreur api
          inputError={inputError} // Ceci est l'erreur de Montant
          payment={payment}
          switchState={acchat}>
            <h4 className='swap-steps'>
              {!crypto && 'Choisissez une crypto'}
              {crypto && !payment && 'Choisissez un moyen de paiement'}
              {crypto && payment && !amount && 'Entrez un montant'}
            </h4>
            {errorMessage && <div className="amount-error">{errorMessage}</div>}

        </SwapSummary>
        <Button
          type='submit'
          disabled={isLoading}
          isLoading={isLoading}
          onClick={handleButtonClick}
          label={acchat ? 'Acheter' : 'Vendre'} // Texte du bouton d'achat ou de vente
        />
      </div>

    </form>
  )
}

export default Conversion

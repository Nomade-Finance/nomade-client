import './_resume.scss'

import React from 'react'

export interface SwapSummaryProps {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  total: number;
  error: string | null;
  inputError?: string | null;
  children?: React.ReactNode;
  payment: string;
  switchState?: boolean;
}

const SwapSummary: React.FC<SwapSummaryProps> = ({
  amount,
  fromCurrency,
  toCurrency,
  total,
  error,
  inputError,
  children,
  payment,
  switchState
}) => {
  const TRANSACTION_FEE = parseFloat(process.env.NEXT_PUBLIC_TRANSACTION_FEE || '0') // Frais de transaction
  const fees = switchState ? (total * TRANSACTION_FEE).toFixed() : 0
  const totalWithFees = (total + Number(fees)).toFixed() // Total + frais
  return (
    <div id="swap-summary">
      {children}
      {crypto && payment && amount > 0 && (
        <>
          <h3>Résumé de l&apos;échange</h3>
          <div className="summary">
            <p>
              Vous échangez <span>{amount} {fromCurrency}</span> contre <span>{toCurrency}</span>.
            </p>
          </div>

          <div className='fees-total-group'>
            {/* Afficher les frais */}
            {switchState && <p>Frais: {Number(fees).toLocaleString('fr-FR')} FCFA</p>}

            {/* Afficher le total + frais */}
            <h4 className="total">
              Total {switchState ? '+ Frais' : ''}: {Number(totalWithFees).toLocaleString('fr-FR')} FCFA
            </h4>
          </div>
          {inputError && <div className='amount-error'>{inputError}</div>}
          {error && <p className="summary-error">{error}</p>}
        </>
      )}
    </div>
  )
}

export default SwapSummary
import { Route, Routes } from 'react-router-dom'

import Accueil from '@pages/Accueil'
import Apropos from '@pages/Apropos'
import ConditionsUtilisation from '@pages/ConditionsDutilisation'
import Contacts from '@pages/Contacts'
import Disclaimer from '@pages/Disclaimer'
import Docs from '@pages/Docs'
import Echanges from '@pages/Echanges'
import Erreur404 from '@pages/NotFound'
import PolitiqueDeConfidentialite from '@pages/Politique-de-confidentialite'
import Services from '@pages/Services'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/echanges" element={<Echanges />} />
      <Route path="/services" element={<Services />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route
        path="/politique-de-confidentialite"
        element={<PolitiqueDeConfidentialite />}
      />
      <Route path="/cgu" element={<ConditionsUtilisation />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  )
}

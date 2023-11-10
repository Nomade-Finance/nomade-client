import { Route, Routes } from 'react-router-dom'

import Accueil from '@pages/Accueil'
import Echanges from '@pages/Echanges'
import Erreur404 from '@pages/NotFound'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="/echanges" element={<Echanges />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  )
}

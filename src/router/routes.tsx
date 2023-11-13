import { LazyMotion, domAnimation } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Accueil from '@pages/Accueil'
import Apropos from '@pages/Apropos'
import Loading from '@components/Loading/Loading'
import Services from '@pages/Services'

const Echanges = lazy(() => import('@pages/Echanges'))
const Docs = lazy(() => import('@pages/Docs'))
const Disclaimer = lazy(() => import('@pages/Disclaimer'))
const Contacts = lazy(() => import('@pages/Contacts'))
const ConditionsUtilisation = lazy(
  () => import('@pages/ConditionsDutilisation')
)

const Erreur404 = lazy(() => import('@pages/NotFound'))
const PolitiqueDeConfidentialite = lazy(
  () => import('@pages/Politique-de-confidentialite')
)
export const Router = () => {
  const location = useLocation()
  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.key}>
          <Route index element={<Accueil />} />
          <Route path="/echanges" element={<Echanges />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cgu" element={<ConditionsUtilisation />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PolitiqueDeConfidentialite />}
          />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Suspense>
    </LazyMotion>
  )
}

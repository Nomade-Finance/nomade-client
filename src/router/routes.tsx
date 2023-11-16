import { LazyMotion, domAnimation } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Accueil from '@pages/Accueil'
import Loading from '@components/Loading/Loading'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { inject } from '@vercel/analytics'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}
const Echanges = lazy(() => import('@pages/Echanges'))
const Apropos = lazy(() => import('@pages/Apropos'))
const Dashboard = lazy(() => import('@pages/Dashboard'))
const Support = lazy(() => import('@pages/Support'))
const Docs = lazy(() => import('@pages/Docs'))
const Services = lazy(() => import('@pages/Services'))
const Disclaimer = lazy(() => import('@pages/Disclaimer'))
const Contacts = lazy(() => import('@pages/Contacts'))
const ConditionsUtilisation = lazy(() => import('@pages/ConditionsDutilisation'))

const Erreur404 = lazy(() => import('@pages/NotFound'))
const PolitiqueDeConfidentialite = lazy(() => import('@pages/Politique-de-confidentialite'))
inject()
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
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<Dashboard />} />
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

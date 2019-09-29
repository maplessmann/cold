import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import generateRoutes from 'utils/generateRoutes'

const NotFound = lazy(() => import('./pages/NotFound'))

const routes = [
  {
    path: '/',
    component: 'Home',
  },
  {
    path: '/about/',
    component: 'About',
  },
]

const Routes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {generateRoutes(routes)}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Routes

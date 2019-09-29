import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import generateRoutes from 'utils/generateRoutes'

const NotFound = loadable(() =>
  import('./pages/NotFound' /* webpackChunkName: 'NotFound' */)
)

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
    <Switch>
      {generateRoutes(routes)}
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes

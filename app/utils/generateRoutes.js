import loadable from '@loadable/component'
import { Route } from 'react-router-dom'

const generateRoutes = routes => {
  return routes.map(({ path, component }, index) => {
    const AsyncComponent = loadable(() =>
      import(`pages/${component}` /* webpackChunkName: "[request]" */)
    )

    return (
      <Route
        exact={index === 0}
        key={index}
        path={path}
        component={AsyncComponent}
      />
    )
  })
}

export default generateRoutes

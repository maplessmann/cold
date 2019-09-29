import { lazy } from 'react'
import { Route } from 'react-router-dom'

const generateRoutes = routes => {
  return routes.map(({ path, component }, index) => {
    const AsyncComponent = lazy(() =>
      import(`pages/${component}` /* webpackChunkName: 'Route' */)
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

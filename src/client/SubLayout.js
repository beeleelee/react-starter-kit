import React from 'react'
import { Route } from 'react-router-dom'

const nodePath = require('path')

const Wrapper = ({ children }) => <React.Fragment>{children}</React.Fragment>

const SubLayout = ({ routes = [], dir = '' }) => {
  return (
    <React.Fragment>
      {
        routes.map((route, i) => {
          const path = nodePath.join(dir, route.path)
          const Component = route.component || Wrapper
          const subRoutes = route.routes || []
          return (
            <React.Fragment key={i}>
              {
                subRoutes.length > 0 ?
                  <Component>
                    <SubLayout routes={subRoutes} dir={path} />
                  </Component>
                  :
                  <Route
                    path={path}
                    exact={route.exact ? true : false}
                    component={Component} />
              }
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  )
}

export default SubLayout 
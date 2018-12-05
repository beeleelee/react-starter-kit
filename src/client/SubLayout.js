import React from 'react'
import { Route } from 'react-router-dom'

const nodePath = require('path')

const Wrapper = ({ children }) => <React.Fragment>{children}</React.Fragment>

const SubLayout = ({ routes = [] }) => {
  return (
    <React.Fragment>
      {
        routes.map((route, i) => {
          const path = nodePath.normalize(`${route.path}`)
          const Component = route.component || Wrapper
          console.log(route, i)
          return (
            <React.Fragment key={i}>
              <Route
                path={path}
                exact={route.exact ? true : false}
                component={Component}>
                {
                  route.routes && route.routes.length ?
                    <SubLayout routes={route.routes} />
                    : null
                }
              </Route>
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  )
}

export default SubLayout 
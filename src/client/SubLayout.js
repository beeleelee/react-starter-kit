import React from 'react'
import { Route } from 'react-router-dom'
import { isSet } from 'mytoolkit'

const nodePath = require('path')

const SubLayout = ({ routes = [], dir = '' }) => {
  return (
    <React.Fragment>
      {
        routes.map((route, i) => {
          const path = nodePath.join(dir, route.path)
          const subRoutes = route.routes || []
          if (subRoutes.length > 0) {
            return <SubLayout key={i} routes={subRoutes} dir={path} />
          }
          if (route.component) {
            return <Route
              key={i}
              path={path}
              exact={isSet(route.exact) && !route.exact ? false : true}
              component={route.component} />
          }
          return null
        })
      }
    </React.Fragment>
  )
}

export default SubLayout 
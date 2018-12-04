import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const nodePath = require('path')

let SubLayout = (props) => {
  props.routes && props.routes.forEach((item, i, arr) => {
    if(item.Component && !item.isAdd) {
      if(arr[i].routes) {
        arr[i].routes.unshift({
          title: item.title,
          path: '',
          exact: true,
          dir: '',
          compoent: item.compoent ? item.compoent : SubLayout 
        })
        delete arr[i].compoent 
      }
      arr[i].isAdd = true 
    }
    arr[i].dir = props.match ? props.match.path: ''
  })

  return (
    <div>
      {
        props.routes && props.routes.length > 0 ? 
        <Switch>
          {
            props.routes.map((route, i) => {
              const path = nodePath.normalize(`${route.dir}${route.path}`)
              const Component = route.compoent ? route.compoent : SubLayout 

              return (
                <Route path={path} key={i} exact={route.exact ? true : false} 
                  render={props => (<Component {...props} routes={route.routes} />)} />
              )
            })
          }
          {
            `${props.routes[0].dir}` === '' || `${props.routes[0].dir}` === '/' ? <Redirect to={props.routes[0].path} />  : null 
          }
        </Switch> : null 
      }
    </div>
  )
}

class Container extends Component {
  render() {
    return (
      <Route>
        <div>
          <SubLayout {...this.props} />
        </div>
      </Route>
    )
  }
}

export default Container 
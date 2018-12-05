import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const context = require.context('$modules', true, /\/*\/reducers\/index\.js$/)
const keys = context.keys() || []

const reducers = {}

for (let i = 0; i < keys.length; i++) {
  let exp = context(keys[i])
  console.log(exp)
  for (let fn in exp) {
    reducers[fn] = exp[fn]
  }
}
console.log(reducers)

const rootReducer = combineReducers({
  router: routerReducer,
  ...reducers,
})

export default rootReducer 
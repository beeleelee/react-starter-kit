import Home from '$modules/home'

const context = require.context('$modules', true, /\/*\/Route\.js$/)

const keys = context.keys()

const routes = [
  {
    title: '',
    path: '/',
    exact: true,
    component: Home 
  }
]
for (let i = 0; i < keys.length; i++) {
  routes.push(context(keys[i]))
}

export default routes 
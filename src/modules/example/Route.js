import A from './A'
import B from './B'
import C from './C'

export default {
  title: '示例',
  path: '/example',
  exact: true,
  routes: [
    {
      title: 'a',
      path: 'a',
      component: A
    },
    {
      title: 'b',
      path: 'b',
      component: B
    },
    {
      title: 'c',
      path: 'c',
      component: C
    }
  ]
}
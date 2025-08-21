export default [
  {
    path: '/',
    exact: true,
    key:"home",
    component: () => import('../pages/Home')
  },
  {
    path: '/about',
    exact: true,
    key:"movie",
    component: () => import('../pages/Movie')
  },

]
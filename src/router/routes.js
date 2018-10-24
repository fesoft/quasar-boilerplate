
const routes = [
  {
    path: '/cadastro',

    // We point it to our component
    // where we defined our QLayout
    component: () => import('layouts/cadastro'),

    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      {
        path: 'bancos',
        component: () => import('pages/cadastro-bancos')
      },
      {
        path: 'contabancaria',
        component: () => import('pages/cadastro-contabancaria')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

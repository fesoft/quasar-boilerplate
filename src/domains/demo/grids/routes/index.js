import { meta } from '../model/index'

export default [
  {
    path: '/dashboard/forms',
    component: () => import('pages/domains/demo/forms/components/Index.vue'),
    meta: meta,
    name: 'dashboard.forms.index'
  },
  {
    path: '/dashboard/forms/dynamic',
    component: () => import('pages/domains/demo/forms/components/Dynamic.vue'),
    meta: meta,
    name: 'dashboard.forms.dynamic'
  }
]

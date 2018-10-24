import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach, afterEach } from 'genesis/infra/router/guard'
import { routes } from '../routes'

Vue.use(VueRouter)

export const load = (component) => {
    if (!component) {
      return
    }
    return () => import(`src/${component}.vue`)
  }
/**
 * @param {Array} routes
 */
export const configure = (routes) => {
  return routes.map(route => {
    route.component = load(route.component)
    if (route.children) {
      route.children = configure(route.children)
    }
    return route
  })
}

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: configure(routes),

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
 
  Router.beforeEach = beforeEach
  Router.afterEach = afterEach
  return Router
}

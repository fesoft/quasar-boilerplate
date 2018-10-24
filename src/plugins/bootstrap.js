import bootstrap from 'src/bootstrap'

const base = {
  el: '#q-app',
  render: h => h(require('../root.vue').default)
}

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  const options = Object.assign({}, base, bootstrap(Vue))
}

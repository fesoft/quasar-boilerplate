module.exports = {
  NODE_ENV: '"production"',
  LOCALE: '"pt_BR"',
  APP: {
    NAME: '"PHPZM Quasar Boilerplate"',
    DEVICE: '"appDevice"',
    TOKEN: '"appAuth"',
    USER: '"appUser"',
    REMEMBER: '"appRemember"',
    PERMISSIONS: '"appPermission"'
  },
  API: {
    PROTOCOL: '"http"',
    DOMAIN: '"192.168.25.40"',
    PATH: '"/api"',
    PORT: '"8000"'
  },
  OAUTH: {
    FACEBOOK: '""'
  },
  ROUTES: {
    LOGIN: {
      name: "'auth.login'"
    },
    NO_ACCESS: {
      name: "'dashboard.no-access'"
    },
    HOME: {
      name: "'dashboard.home'"
    }
  },
  DEV: false
}

import model from 'genesis/support/model'
import { resource } from 'genesis/infra/services/http/resource'
import {
  reference as organizationReference,
  api as organizationApi,
  path as organizationPath,
  sources as organizationSource
} from 'src/domains/admin/organization/model'

/**
 * @type {string}
 */
export const icon = 'people'

/**
 * @type {string}
 */
export const label = 'Usuários'

/**
 * @type {string}
 */
export const title = 'Cadastro de Usuários'

/**
 * @type {string}
 */
export const tooltip = 'Defina quais usuários terão acesso a sua aplicação e gerencie-os'

/**
 * @type {string}
 */
export const description = 'Adicione e gerencie Usuários no sistema e defina como se comportam'

/**
 * @type {string}
 */
export const api = '/admin/user'

/**
 * @type {string}
 */
export const id = 'id'

/**
 * @type {string}
 */
export const path = '/dashboard/admin/user'

/**
 * @type {string}
 */
export const namespace = 'admin.user'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {string}
 */
const organizationFk = 'organization_id'

/**
 * @type {Object}
 */
export const pivot = model.pivot(organizationApi, organizationReference, organizationFk)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, false, tooltip, 'user', namespace, 1)

/**
 * @type {Array}
 */
const slots = [
  {
    field: 'name',
    component: 'MyLink',
    props: {
      path: `${organizationPath}/{${organizationFk}}`
    }
  }
]

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return model.grid(service, path, id, fields('index', route), filters(scope, route), null, {slots})
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  const options = {
    tab: 'outros',
    tabs: [
      {
        name: 'principal',
        label: 'Principal'
      },
      {
        name: 'outros',
        label: 'Outros'
      }
    ],
    debug: true
  }
  // service, scope, path, id, schemas, actions = null, options = {}
  return model.form(service, scope, path, id, fields(scope, route), null, options)
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const fields = (scope, route = null) => {
  return model.filter(
    [
      model.field('id', 'Código')
      .$pk()
      .$tab('principal')
      .$render(),
      model.field('name', 'Nome')
      .$text()
      .$tab('principal')
      .$filter()
      .$required()
      .$event('change', (record, schemas, $component) => (schemas['gender'].hidden = !schemas['gender'].hidden))
      .$form({width: 70})
      .$render(),
      // relationship with organization using source (useful to small datasets)
      model.field('organization_id', 'Organização')
      .$tab('principal')
      .$form({width: 30})
      //.$source(organizationSource, scope)
      .$render(),

      model.field('profile', 'Perfil')
      .$tab('principal')
      .$out('index')
      .$form({width: 30})
      .$select(profiles, true)
      .$render(),
      model.field('gender', 'Sexo')
      .$tab('principal')
      .$filter()
      .$form({width: 30, hidden: true})
      .$select(gender, false)
      .$render(),
      model.field('property.foo', 'Dot Notation')
      .$tab('principal')
      .$form({width: 40})
      .$filter()
      .$text()
      .$render(),
      model.field('email', 'E-mail')
      .$tab('outros')
      .$text()
      .$filter()
      .$form({width: 50})
      .$render(),
      model.field('password', 'Senha')
      .$tab('outros')
      .$password()
      .$required(scope === 'create')
      .$scopes(['create', 'edit'])
      .$tab('outros')
      .$form({width: 50})
      .$render(),

      // using pivot to solve relationships
      model.field('organizations', 'Organizações')
      .$tab('outros').$out('index')
      .$form({width: 100, placeholder: '.: Selecione as Organizações :.'})
      .$pivot(pivot)
      .$render()
    ],
    scope
  )
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const filters = (scope, route = null) => {
  return []
}

/**
 * @type {Array}
 */
export const profiles = [
  {label: 'Geral', value: 'general'},
  {label: 'Atendimento', value: 'support'},
  {label: 'Financeiro', value: 'financial'},
  {label: 'Contabilidade', value: 'accountant'}
]

/**
 * @type {Array}
 */
export const gender = [
  {label: 'Masculino', value: 'M'},
  {label: 'Feminino', value: 'F'}
]

// configure buttons
/**
 * @type {Function}
 * @param {AppCrudFrom|AppCrudGrid} $this
 * @param actions
 */
const actions = ($this, actions) => {
  const map = button => {
    if (['update'].includes(button.id)) {
      // keep the access control system and add other validation layer
      button.access = (record, $component, $user) => {
        return record['id'] === 1
      }
    }
    return button
  }
  return actions.map(map)
  .filter(action => !['view', 'edit', 'destroy']
  .includes(action.id))
}

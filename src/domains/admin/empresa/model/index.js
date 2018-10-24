import model from 'genesis/support/model'
import { resource } from 'genesis/infra/services/http/resource'

/**
 * @type {string}
 */
export const icon = 'people'

/**
 * @type {string}
 */
export const label = 'Empresa'

/**
 * @type {string}
 */
export const title = 'Cadastro de Empresa'

/**
 * @type {string}
 */
export const tooltip = 'Cadastro de empresas'

/**
 * @type {string}
 */
export const description = 'Adicione e gerencie empresas'

/**
 * @type {string}
 */
export const api = '/empresa'

/**
 * @type {string}
 */
export const id = 'id'

/**
 * @type {string}
 */
export const path = '/dashboard/admin/empresa'

/**
 * @type {string}
 */
export const namespace = 'admin.empresa'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)
/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, false, tooltip, 'empresa', namespace, 1)

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return model.grid(service, path, id, fields('index', route), filters(scope, route, ['create' ,'edit']))
}
export const form = (scope, route) => {
  // service, scope, path, id, schemas, actions = null, options = {}
  return model.form(service, scope, path, id, fields(scope, route), )
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
      .$render(),
      model.field('nome', 'Razão Social')
      .$text()
      .$filter()
      .$required()
      .$form({width: 70})
      .$grid({align: 'left'})
      .$render(),
      model.field('nome_fantasia', 'Nome de fantasia')
      .$text()
      .$filter()
      .$required()
      .$form({width: 50})
      .$grid({align: 'left'})
      .$render(),
      model.field('nome_contato', 'Nome do contato')
      .$text()
      .$filter()
      .$required()
      .$form({width: 50})
      .$grid({width: 50, align: 'left'})
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

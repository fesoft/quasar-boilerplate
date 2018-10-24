import model from 'genesis/support/model'

/**
 * @type {string}
 */
export const icon = 'subtitles'

/**
 * @type {string}
 */
export const label = 'Grids'

/**
 * @type {string}
 */
export const title = 'Grid de Exemplo'

/**
 * @type {string}
 */
export const path = '/dashboard/grids'

/**
 * @type {string}
 */
export const tooltip = 'Pequeno resumo dos campos pré-configurados que podem ser usados nos formulários'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'grids')

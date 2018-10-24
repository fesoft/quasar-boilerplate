/**
 * @param {object} credentials
 * @returns {object}
 */
export const configureAuth = (credentials) => {
  return { email: credentials.user, password: credentials.password }
}

/**
 * @param {object} data ()
 * @returns {object}
 */
export const configureAuthData = { user: 'jfscouto@gmail.com', password: '123456' }

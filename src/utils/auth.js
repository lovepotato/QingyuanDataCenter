import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return '94316AFF0DCB987371ED7B6F59751B76' // Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

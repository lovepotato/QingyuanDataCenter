import Cookies from 'js-cookie'

const TokenKey = 'token'
const uniqueFlagKey = 'uniqueFlag'

export function getToken() {
  return '94316AFF0DCB987371ED7B6F59751B76' // Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getUniqueFlag() {
  return localStorage.getItem(uniqueFlagKey)
}

export function setUniqueFlag(uniqueFlag) {
  return localStorage.setItem(uniqueFlagKey, uniqueFlag)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

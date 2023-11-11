import {
  ADMIN_ONLY_OPERATION,
  EMAIL_EXISTS,
  INVALID_EMAIL,
  MISSING_EMAIL,
  MISSING_PASSWWORD,
  USER_DELETED,
  WEAK_PASSWORD,
  NETWORK_ISSUE,
  INCORRECT_PASSWORD,
  TOO_MANY_REQUESTS,
} from './constants'

export const generateErrorMessage = (errMsg) => {
  if (errMsg === MISSING_EMAIL) {
    return 'Email is required'
  } else if (errMsg === INVALID_EMAIL) {
    return 'Please enter valid e-mail Id'
  } else if (errMsg === USER_DELETED) {
    return 'User not found'
  } else if (errMsg === MISSING_PASSWWORD) {
    return 'Password is required'
  } else if (errMsg === ADMIN_ONLY_OPERATION) {
    return 'Please enter required fields'
  } else if (errMsg === WEAK_PASSWORD) {
    return 'Please choose strong password'
  } else if (errMsg === EMAIL_EXISTS) {
    return 'Email already in use'
  } else if (errMsg === NETWORK_ISSUE) {
    return 'Looks like some network issues'
  } else if (errMsg === INCORRECT_PASSWORD) {
    return 'Incorrect Password'
  } else if (errMsg === TOO_MANY_REQUESTS) {
    return 'Too many attempts to login'
  } else return errMsg
}

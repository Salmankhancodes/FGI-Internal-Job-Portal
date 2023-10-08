export const loginUserSuccess = (payload) => ({
  type: 'USER_LOGIN_SUCCESS',
  payload,
})
export const loginUserFailed = (payload) => ({
  type: 'USER_LOGIN_FAILED',
  payload,
})
export const loginUserLoading = () => ({
  type: 'USER_LOGIN_LOADING',
})
export const logoutUser = () => ({
  type: 'USER_LOGOUT',
})

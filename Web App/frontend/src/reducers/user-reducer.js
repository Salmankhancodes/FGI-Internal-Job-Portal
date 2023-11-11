const initialState = {
  user: {},
  loading: null,
  error: null,
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      const userInfo = action?.payload?.user || action.payload
      return {
        userInfo: {
          uid: userInfo.uid,
          displayName: userInfo.displayName,
          email: userInfo.email,
        },
        loading: false,
        error: null,
        loggedIn: true,
      }
    case 'USER_LOGOUT':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default userReducer

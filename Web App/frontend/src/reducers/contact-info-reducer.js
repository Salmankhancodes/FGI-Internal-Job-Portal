const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  phone: null,
  email: '',
  linkedin: '',
  github: '',
  portfolio: '',
}

const contactInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default contactInfoReducer

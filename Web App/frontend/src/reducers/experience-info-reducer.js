const initialState = {
  companyName: '',
  dateOfJoining: '',
  dateOfExit: '',
  designation: '',
  jobDescription: '',
}

const experienceInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EXPERIENCE_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default experienceInfoReducer

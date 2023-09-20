const initialState = {
  collegeName: '',
  collegeStartYear: '',
  collegeEndYear: '',
  course: '',
  branch: '',
  cgpa: '',
  schoolName: '',
  board: '',
  schoolEndYear: '',
  marks: '',
}

const educationInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EDUCATION_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default educationInfoReducer

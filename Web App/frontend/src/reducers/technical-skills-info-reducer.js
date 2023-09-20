const initialState = {
  programmingLanguage: '',
  technology: '',
  tools: '',
}

const technicalSkillsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TECHNICAL_SKILLS_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default technicalSkillsInfoReducer

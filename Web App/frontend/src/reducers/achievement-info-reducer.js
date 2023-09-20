const initialState = {
  achievement1: '',
  achievement2: '',
  achievement3: '',
  achievement4: '',
}

const achievementInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACHIEVEMENT_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default achievementInfoReducer

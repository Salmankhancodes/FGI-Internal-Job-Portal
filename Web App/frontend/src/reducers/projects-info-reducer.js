const initialState = {
  projectTitle1: '',
  techStack1: '',
  projectDescription1: '',
  projectLink1: '',
  projectTitle2: '',
  techStack2: '',
  projectDescription2: '',
  projectLink2: '',
  projectTitle3: '',
  techStack3: '',
  projectDescription3: '',
  projectLink3: '',
  projectTitle4: '',
  techStack4: '',
  projectDescription4: '',
  projectLink4: '',
}

const projectsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROJECTS_INFO':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default projectsInfoReducer

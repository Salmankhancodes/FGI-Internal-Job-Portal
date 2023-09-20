import { combineReducers } from 'redux'
import contactInfo from './contact-info-reducer'
import educationInfo from './education-info-reducer'
import experienceInfo from './experience-info-reducer'
import achievementInfo from './achievement-info-reducer'
import technicalSkillsInfo from './technical-skills-info-reducer'
import projectsInfo from './projects-info-reducer'

const rootReducer = combineReducers({
  contactInfo,
  educationInfo,
  experienceInfo,
  achievementInfo,
  technicalSkillsInfo,
  projectsInfo,
})

export default rootReducer

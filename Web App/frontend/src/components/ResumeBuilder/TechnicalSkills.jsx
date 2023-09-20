import React from 'react'
import { connect } from 'react-redux'
import { updateTechnicalSkills } from '../../actions/technical-skills-info'

function TechnicalSkills(props) {
  const { technicalSkillsInfo, dispatchTechnicalSkills } = props
  console.log(technicalSkillsInfo)

  const handleUpdateTechnicalSkills = (e, fieldToUpdate) => {
    console.log(e.target.value)
    dispatchTechnicalSkills({
      ...technicalSkillsInfo,
      [fieldToUpdate]: e.target.value,
    })
  }

  return (
    <div>
      <input
        placeholder='programming Languages'
        type='text'
        value={technicalSkillsInfo.programmingLanguage}
        onChange={(e) => handleUpdateTechnicalSkills(e, 'programmingLanguage')}
      />
      <input
        placeholder='Technologies/frameworks'
        type='text'
        value={technicalSkillsInfo.technology}
        onChange={(e) => handleUpdateTechnicalSkills(e, 'technology')}
      />

      <input
        placeholder='Developer tools'
        type='text'
        value={technicalSkillsInfo.tools}
        onChange={(e) => handleUpdateTechnicalSkills(e, 'tools')}
      />
    </div>
  )
}

export default connect(
  ({ technicalSkillsInfo }) => ({ technicalSkillsInfo }),
  (dispatch) => ({
    dispatchTechnicalSkills: (payload) =>
      dispatch(updateTechnicalSkills(payload)),
  })
)(TechnicalSkills)

import React from 'react'
import { connect } from 'react-redux'
import { updateExperienceInfo } from '../../actions/experience-info'

function Experience(props) {
  const { experienceInfo, dispatchExperienceInfo } = props
  console.log(experienceInfo)

  const handleUpdateExperienceInfo = (e, fieldToUpdate) => {
    dispatchExperienceInfo({
      ...experienceInfo,
      [fieldToUpdate]: e.target.value,
    })
  }
  return (
    <div>
      <input
        placeholder='Company name'
        type='text'
        value={experienceInfo.companyName}
        onChange={(e) => handleUpdateExperienceInfo(e, 'companyName')}
      />
      <input
        placeholder='start date'
        type='month'
        value={experienceInfo.dateOfJoining}
        onChange={(e) => handleUpdateExperienceInfo(e, 'dateOfJoining')}
      />
      <input
        placeholder='end date'
        type='month'
        value={experienceInfo.dateOfExit}
        onChange={(e) => handleUpdateExperienceInfo(e, 'dateOfExit')}
      />
      <input
        placeholder='designation'
        type='text'
        value={experienceInfo.designation}
        onChange={(e) => handleUpdateExperienceInfo(e, 'designation')}
      />
      <input
        placeholder='job description'
        type='text'
        value={experienceInfo.jobDescription}
        onChange={(e) => handleUpdateExperienceInfo(e, 'jobDescription')}
      />
    </div>
  )
}

export default connect(
  ({ experienceInfo }) => ({
    experienceInfo,
  }),
  (dispatch) => ({
    dispatchExperienceInfo: (payload) =>
      dispatch(updateExperienceInfo(payload)),
  })
)(Experience)

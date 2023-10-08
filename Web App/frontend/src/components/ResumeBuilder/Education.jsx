import React from 'react'
import { connect } from 'react-redux'
import { updateEducationInfo } from '../../actions/education-info'

function Education(props) {
  const { educationInfo, dispatchEducationInfo } = props

  const handleUpdateEducationInfo = (e, fieldToUpdate) => {
    dispatchEducationInfo({
      ...educationInfo,
      [fieldToUpdate]: e.target.value,
    })
  }
  return (
    <div>
      <input
        placeholder='College Name'
        type='text'
        value={educationInfo.collegeName}
        onChange={(e) => handleUpdateEducationInfo(e, 'collegeName')}
      />
      <input
        placeholder='start year'
        type='month'
        value={educationInfo.collegeStartYear}
        onChange={(e) => handleUpdateEducationInfo(e, 'collegeStartYear')}
      />
      <input
        placeholder='end year'
        type='month'
        value={educationInfo.collegeEndYear}
        onChange={(e) => handleUpdateEducationInfo(e, 'collegeEndYear')}
      />
      <input
        placeholder='Course'
        type='text'
        value={educationInfo.course}
        onChange={(e) => handleUpdateEducationInfo(e, 'course')}
      />
      <input
        placeholder='branch'
        type='text'
        value={educationInfo.branch}
        onChange={(e) => handleUpdateEducationInfo(e, 'branch')}
      />
      <input
        placeholder='cgpa'
        type='text'
        value={educationInfo.cgpa}
        onChange={(e) => handleUpdateEducationInfo(e, 'cgpa')}
      />
      <input
        placeholder='school'
        type='text'
        value={educationInfo.schoolName}
        onChange={(e) => handleUpdateEducationInfo(e, 'schoolName')}
      />
      <input
        placeholder='board name'
        type='text'
        value={educationInfo.board}
        onChange={(e) => handleUpdateEducationInfo(e, 'board')}
      />
      <input
        placeholder='year'
        type='month'
        value={educationInfo.schoolEndYear}
        onChange={(e) => handleUpdateEducationInfo(e, 'schoolEndYear')}
      />
      <input
        placeholder='marks/percentage obtained'
        type='text'
        value={educationInfo.marks}
        onChange={(e) => handleUpdateEducationInfo(e, 'marks')}
      />
    </div>
  )
}

export default connect(
  ({ educationInfo }) => ({
    educationInfo,
  }),
  (dispatch) => ({
    dispatchEducationInfo: (payload) => dispatch(updateEducationInfo(payload)),
  })
)(Education)

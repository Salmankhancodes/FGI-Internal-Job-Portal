import React from 'react'
import { connect } from 'react-redux'
import { updateAchievementInfo } from '../../actions/achievement-info'

function Achievements(props) {
  const { achievementInfo, dispatchAchievementInfo } = props

  const handleUpdateAchievementInfo = (e, fieldToUpdate) => {
    dispatchAchievementInfo({
      ...achievementInfo,
      [fieldToUpdate]: e.target.value,
    })
  }
  return (
    <div>
      {' '}
      <input
        placeholder='Achievement 1'
        type='text'
        value={achievementInfo.achievement1}
        onChange={(e) => handleUpdateAchievementInfo(e, 'achievement1')}
      />
      <input
        placeholder='Achievement 2'
        type='text'
        value={achievementInfo.achievement2}
        onChange={(e) => handleUpdateAchievementInfo(e, 'achievement2')}
      />
      <input
        placeholder='Achievement 3'
        type='text'
        value={achievementInfo.achievement3}
        onChange={(e) => handleUpdateAchievementInfo(e, 'achievement3')}
      />
      <input
        placeholder='Achievement 4'
        type='text'
        value={achievementInfo.achievement4}
        onChange={(e) => handleUpdateAchievementInfo(e, 'achievement4')}
      />
    </div>
  )
}

export default connect(
  ({ achievementInfo }) => ({ achievementInfo }),
  (dispatch) => ({
    dispatchAchievementInfo: (payload) =>
      dispatch(updateAchievementInfo(payload)),
  })
)(Achievements)

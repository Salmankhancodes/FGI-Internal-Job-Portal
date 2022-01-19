import React from 'react'
import image from './underdev.png'
import './Profile.css'
function Profile() {
  return (
    <div className='profileWrapper'>
      <img className='underdevImage' src={image} alt='' />
      <h1>This page is currently under development. </h1>
    </div>
  )
}

export default Profile

import React from 'react'
import './Home.css'
import image from './EmptyFeeds.png'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='homeFeeds'>
      <div className='homeLeft'>
        {/* <h3>Hi 👋 {auth.currentUser.email}</h3> */}
        <img src={logo} alt='' />
        <div className='homeHeading'>
          <h1>FGI-Internal Job Portal</h1>
          {/* <h3>Internal Job Portal</h3> */}
          <p>1️⃣Build Resume 2️⃣ Search Job 3️⃣ Apply</p>
          <div className='homeButtons'>
            <button onClick={() => navigate('/search')} className='homeButton'>
              Search Jobs
            </button>
            <button
              onClick={() => navigate('/resumebuilder')}
              className='homeButton'
            >
              Build Resume
            </button>
          </div>
        </div>
      </div>
      <div className='homeRight'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default Home

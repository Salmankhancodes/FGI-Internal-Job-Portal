import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={() => navigate('/signup')}>Sign-Up</button>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Welcome

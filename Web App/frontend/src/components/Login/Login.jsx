import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <>
      <div className='loginPage'>
        <div className='formBox'>
          <h1 className='loginHeading'>Login</h1>
          <form className='formContainer'>
            <input
              className='inputName'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className='inputPassword'
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </form>
          <p className='newAccMsg'>
            Don't have an account?{' '}
            <Link
              style={{
                textDecoration: 'none',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              to='/signup'
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login

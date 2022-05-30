import { signInWithEmailAndPassword } from '@firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase'
import './Login.css'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState()

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className='loginPage'>
        <div className='formBox'>
          <h1 className='loginHeading'>Login</h1>
          <form className='formContainer' onSubmit={login}>
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
            <button className='submitButton' type='submit'>
              Login
            </button>
          </form>
          <p className='newAccMsg'>
            Don't have an account? <Link to='/signup'>Signup here</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login

import { signInWithEmailAndPassword } from '@firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className='login'>
      <form onSubmit={login}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login

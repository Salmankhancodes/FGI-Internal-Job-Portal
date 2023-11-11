import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
import { auth } from '../../firebase'
import { connect } from 'react-redux'
import { loginUserSuccess } from '../../actions/user'
import { generateErrorMessage } from '../utils'

const Login = ({ successLoginDispatch }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      const user = await signInWithEmailAndPassword(auth, email, password)
      successLoginDispatch(user)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(generateErrorMessage(error.code))
    }
  }

  return (
    <>
      <div className='loginPage'>
        <div className='formBox'>
          <h1 className='loginHeading'>Login</h1>
          <span className='errorMsg'>{error}</span>
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
            <button
              disabled={loading}
              className='submitButton'
              onClick={handleLogin}
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
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
        </div>{' '}
      </div>
    </>
  )
}

export default connect(
  ({ user }) => ({ loginError: user.error }),
  (dispatch) => ({
    successLoginDispatch: (opts) => dispatch(loginUserSuccess(opts)),
  })
)(Login)

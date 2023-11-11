import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { generateErrorMessage } from '../utils'

const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(newUser.user, { displayName: name })
      navigate('/login')
      setLoading(false)
    } catch (error) {
      setError(generateErrorMessage(error.code))
      setLoading(false)
    }
  }

  return (
    <>
      <div className='signupPage'>
        <div className='signupformBox'>
          <h1 className='signupHeading'>Sign Up</h1>
          <span className='errorMsg'>{error}</span>
          <form className='signupformContainer '>
            <input
              className='inputName inputformfield'
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className='inputEmail inputformfield'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className='inputPassword inputformfield'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className='submitButton'
              onClick={handleSignup}
              type='submit'
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Signup'}
            </button>
          </form>
          <p className='existingAccMsg'>
            Already have an account?{' '}
            <Link
              style={{
                textDecoration: 'none',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              to='/login'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup

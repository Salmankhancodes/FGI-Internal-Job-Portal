import * as React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = React.useState()
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState()

  return (
    <>
      <div className='signupPage'>
        <div className='signupformBox'>
          <h1 className='signupHeading'>Sign Up</h1>
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

            <input
              className='inputPhone inputformfield'
              type='number'
              placeholder='Phone number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <button className='submitButton' type='submit'>
              Signup
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

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
import { useState } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/user'
import AccountMenu from './AccountMenu'

function Navbar({ user }) {
  const [opt, setOpt] = useState(false)
  const userNav = () => {
    setOpt(!opt)
  }
  return (
    <nav>
      <div className='navbar'>
        <div>
          <Link to='/'>
            <img className='navLogo' src={logo} alt='' />
          </Link>
        </div>
        <div className='navMenu'>
          {user.loggedIn ? (
            <>
              <Link to='/'>
                <span>Home</span>
              </Link>
              <Link to='/search'>
                <span>Search Jobs</span>
              </Link>
              <Link to='/resumebuilder'>
                <span>Build Resume</span>
              </Link>
              <p>
                <span>
                  <i
                    onClick={(e) => {
                      userNav()
                    }}
                    className='fas fa-user-circle'
                  ></i>
                </span>
                <AccountMenu opt={opt} />
              </p>
            </>
          ) : (
            <>
              <Link to='/signup'>
                <span>Sign Up</span>
              </Link>
              <Link to='/login'>
                <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({ logoutUserDispatch: () => dispatch(logoutUser()) })
)(Navbar)

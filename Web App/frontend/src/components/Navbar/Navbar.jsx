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
        <div className='navLeft'>
          <Link to='/'>
            <img className='navLogo' src={logo} alt='' />
          </Link>
        </div>
        <div className='navRight'>
          {user.loggedIn ? (
            <>
              <Link to='/'>
                <button>Home</button>
              </Link>
              <Link to='/search'>
                <button>Search Jobs</button>
              </Link>
              <Link to='/resumebuilder'>
                <button>Build Resume</button>
              </Link>
              <p className='userNav'>
                <button>
                  <i
                    onClick={(e) => {
                      userNav()
                    }}
                    className='fas fa-user-circle'
                  ></i>
                </button>
                <AccountMenu opt={opt} />
              </p>
            </>
          ) : (
            <>
              <Link to='/signup'>
                <button>Sign Up</button>
              </Link>
              <Link to='/login'>
                <button>Login</button>
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

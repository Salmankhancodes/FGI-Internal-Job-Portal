import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
import { useState } from 'react'

function Navbar() {
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
          </>
          {
            <p className='userNav'>
              <button>
                <i
                  onClick={(e) => {
                    userNav()
                  }}
                  className='fas fa-user-circle'
                ></i>
              </button>
              {opt === false ? (
                ''
              ) : (
                <>
                  {' '}
                  <div className='userOption'>
                    <Link to='/profile'>
                      <p>
                        <i className='fas fa-user'></i>Profile
                      </p>
                    </Link>
                    <hr />
                    <Link to='/'>
                      <p onClick={() => {}}>
                        <i className='fas fa-sign-out-alt'></i>
                        Logout
                      </p>
                    </Link>
                  </div>
                </>
              )}
            </p>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar

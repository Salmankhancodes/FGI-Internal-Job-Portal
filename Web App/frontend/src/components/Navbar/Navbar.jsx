import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='navLeft'>
          <Link to='/'>
            <img className='navLogo' src={logo} alt='' />
          </Link>
        </div>

        <div className='navRight'>
          <Link to='/'>
            <button>Home</button>
          </Link>

          <Link to='/search'>
            <button>Search Jobs</button>
          </Link>
          <Link to='/resumebuilder'>
            <button>Build Resume</button>
          </Link>
          <Link to='/resumebuilder'>
            <button>About</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/user'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const AccountMenu = ({ opt, user, logoutUserDispatch }) => {
  console.log(user.userInfo)
  const handleSignOut = () => {
    signOut(auth)
    logoutUserDispatch()
    console.log(user)
  }

  return (
    <div>
      {' '}
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
              <p onClick={handleSignOut}>
                <i className='fas fa-sign-out-alt'></i>
                Logout
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
connect()

export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({ logoutUserDispatch: () => dispatch(logoutUser()) })
)(AccountMenu)

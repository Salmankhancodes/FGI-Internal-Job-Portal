import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import Error404 from './components/Errorpage/Error404'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { connect } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import { auth } from './firebase'
import { loginUserSuccess } from './actions/user'
import { useEffect } from 'react'

function App({ user, successLoginDispatch }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        successLoginDispatch(user)
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={user.loggedIn ? <Home /> : <Login />}
          />
          <Route
            path='/search'
            element={<ProtectedRoute user={user.loggedIn} component={Feeds} />}
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute user={user.loggedIn} component={Profile} />
            }
          />
          <Route
            path='/resumebuilder'
            element={
              <ProtectedRoute user={user.loggedIn} component={ResumeBuilder} />
            }
          />
          <Route
            path='/login'
            element={user.loggedIn ? <Navigate to='/' replace /> : <Login />}
          />
          <Route
            path='/signup'
            element={user.loggedIn ? <Navigate to='/' replace /> : <Signup />}
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default connect(
  ({ user }) => ({
    user,
  }),
  (dispatch) => ({
    successLoginDispatch: (opts) => dispatch(loginUserSuccess(opts)),
  })
)(App)

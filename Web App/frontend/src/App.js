import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
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

function App({ user }) {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={user.loggedIn ? <Home /> : <Login />}
          ></Route>
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
        </Routes>
      </Router>
    </div>
  )
}

export default connect(
  ({ user }) => ({
    user,
  }),
  (dispatch) => ({})
)(App)

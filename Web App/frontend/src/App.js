import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Error404 from './components/Errorpage/Error404'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import Profile from './components/Profile/Profile'
import Confirmation from './components/Confirmation'
import { useState } from 'react/cjs/react.development'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  return (
    <div className='App'>
      <Router>
        {/* <h1>user is {user?.email}</h1> */}
        <Navbar user={user} />
        <Routes>
          {/* private routes */}
          <Route path='/' element={user ? <Home /> : <Login />}></Route>
          <Route path='/search' element={user ? <Feeds /> : <Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route
            path='/resumebuilder'
            element={user ? <ResumeBuilder /> : <Login />}
          ></Route>
          <Route path='*' element={<Error404 />}></Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verifyemail' component={<VerifyEmail />} />

          <Route path='/confirmation' component={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Feeds />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/resumebuilder' element={<ResumeBuilder />}></Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

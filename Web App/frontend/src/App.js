import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Error404 from './components/Errorpage/Error404'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Feeds />}></Route>
          <Route path='/resumebuilder' element={<ResumeBuilder />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

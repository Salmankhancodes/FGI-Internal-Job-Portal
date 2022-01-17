import Feeds from './components/Feeds/Feeds'
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Feeds />}></Route>
          <Route path='/resumebuilder' element={<ResumeBuilder />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

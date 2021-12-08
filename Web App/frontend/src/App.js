import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Feeds from './components/Feeds/Feeds'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import Confirmation from './components/Confirmation'

function App() {
  return (
      <Router>
        <Route path='/' component={Welcome} exact />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/feeds' component={Feeds} />
        <Route path="/verifyemail" component={VerifyEmail} />
        <Route path="/confirmation" component={Confirmation} />
      </Router>
  )
}

export default App

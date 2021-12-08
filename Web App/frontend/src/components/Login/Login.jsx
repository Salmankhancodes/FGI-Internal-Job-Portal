import { signInWithEmailAndPassword } from '@firebase/auth'
import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../config/firebase'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState()

    const login = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            history.push('/feeds')
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <form onSubmit={login}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login

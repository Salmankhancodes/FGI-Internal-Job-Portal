import * as React from 'react'
import {auth} from '../../config/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';
import { useHistory } from 'react-router';



const Signup = () => {
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState()
    const history = useHistory()

    const register = async (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(userCredential.user)
          .then(() => {
              history.push('/verifyemail', {name, email, phoneNumber})
          })
          .catch((error) => {
            console.log(error);
          })
        })
        .catch((error) => {
          alert(error)
        });
      }

    return (
        <div>
            <form onSubmit={register}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <button type="submit">Sign-Up</button>
            </form>
        </div>
    )
}

export default Signup

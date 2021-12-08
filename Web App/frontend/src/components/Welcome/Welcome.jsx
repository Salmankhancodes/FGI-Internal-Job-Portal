import React from 'react'
import { useHistory } from 'react-router'

const Welcome = () => {
    const history = useHistory()
    return (
        <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <button onClick={() => history.push('signup')}>Sign-Up</button>
            <button onClick={() => history.push('/login')}>Login</button>
        </div>
    )
}

export default Welcome

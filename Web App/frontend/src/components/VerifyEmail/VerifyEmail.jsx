import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth, db } from '../../config/firebase'
import { sendEmailVerification } from '@firebase/auth'
import { addDoc, collection } from '@firebase/firestore'
import './VerifyEmail.css'

const VerifyEmail = () => {
  const [message, setMessage] = useState('')
  const usersRef = collection(db, 'users')
  const navigate = useNavigate()
  const location = useLocation()
  const { name, email, phoneNumber } = location.state

  useEffect(() => {
    const checkIfVerified = setInterval(() => {
      auth?.currentUser.reload().then((ok) => {
        if (auth?.currentUser.emailVerified) {
          addDoc(usersRef, { name, email, phoneNumber })
          navigate('/')
          clearInterval(checkIfVerified)
        }
      })
    }, 1000)
  })

  const verifyEmail = () => {
    sendEmailVerification(auth?.currentUser)
      .then(() => {
        setMessage('Email Sent')
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className='messageBox'>
      <div className='verificationMessage'>
        <h3>{message ? message : 'Email Verfication'}</h3>
        <h5 style={{ color: 'GrayText', fontSize: '20px' }}>
          Hi, <span style={{ color: 'darkcyan' }}>{name}!</span> We have sent
          you an email
        </h5>

        <h5
          style={{ color: 'GrayText', fontSize: '20px', marginBottom: '20px' }}
        >
          Email Verification for{' '}
          <span style={{ color: 'darkcyan' }}>{email}</span>
        </h5>
        <hr />

        <h3 style={{ color: 'green', fontSize: '24px', marginTop: '20px' }}>
          Didn't get the email?
        </h3>
        <button className='resendButton' onClick={verifyEmail}>
          Resend Email
        </button>
      </div>
    </div>
  )
}

export default VerifyEmail

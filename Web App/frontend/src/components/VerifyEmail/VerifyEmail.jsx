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
      auth.currentUser.reload().then((ok) => {
        if (auth.currentUser.emailVerified) {
          addDoc(usersRef, { name, email, phoneNumber })
          navigate.push('/confirmation')
          clearInterval(checkIfVerified)
        }
      })
    }, 1000)
  })

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setMessage('Email Sent')
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div>
      <h2>{message ? message : 'Email Sent Verify your email'}</h2>
      <h4>Didn't get the email?</h4>
      <button onClick={verifyEmail}>Resend Email</button>
    </div>
  )
}

export default VerifyEmail

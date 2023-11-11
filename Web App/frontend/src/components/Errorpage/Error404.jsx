import React from 'react'
import './Error404.css'

const Error404 = () => {
  return (
    <div className='error-404-page'>
      <div className='error-404-message-box'>
        <p className='error-404-messsage'>
          "This page doesn't belongs to us. So we didn't bother to design it
          either."
        </p>
        <p className='error-404-dev'>- Underpaid UI developer</p>
      </div>
    </div>
  )
}

export default Error404

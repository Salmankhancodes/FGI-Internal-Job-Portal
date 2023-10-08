import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ user, component: Component, ...rest }) => {
  return user ? <Component {...rest} /> : <Navigate to='/login' replace />
}

export default ProtectedRoute

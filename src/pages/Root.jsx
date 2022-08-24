import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';

const Root = () => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/signin" />
  } else {
    if (auth.currentUser.emailVerified) {
      return <Navigate to="/home" />
    } else {
      return <Navigate to="/failedauth" />
    }
  }
}

export default Root
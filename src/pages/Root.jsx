import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import Data from '../DbDoshisha.json';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const Root = () => {
  const { user } = useAuthContext();

  const judgeDocumentExists = async () =>{
    const userData = Data.users.id;
    const userDocumentRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDocumentRef);
    userData.email = user.email;
    if (!docSnap.exists()) {
      setDoc(userDocumentRef, userData);
      return <Navigate to="/inputfiveitems" />
    };
  } ;
  
  if (!user) {
    return <Navigate to="/signin" />
  } else {
    if (auth.currentUser.emailVerified) {
      judgeDocumentExists();
      return <Navigate to="/home" />
    } else {
      return <Navigate to="/failedauth" />
    };
  };
};

export default Root;
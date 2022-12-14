import { auth } from '../firebase';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import Data from '../DbDoshisha.json';
import teachersData from '../teachers.json';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const Root = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  const judge = location.state ? location.state.judge:"";
  const navigate = useNavigate();
  const judgeDocumentExists = async () =>{
    const userData = Data;
    const userDocumentRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDocumentRef);
    userData.email = user.email;
    const isAdmin = JSON.parse(localStorage.getItem("admin_sapori_true"))
    console.log(isAdmin.admin)
    if (isAdmin.admin){
      navigate("/TeachersProfile")
      return
    }
    if (!docSnap.exists()) {
      setDoc(userDocumentRef, userData)
      navigate('/profile')
    } else {
      navigate('/home')
    }
  };

  const registerTeachers = async () => {
    const userData = teachersData;
    const userDocumentRef = doc(db, 'teachers', user.uid);
    const docSnap = await getDoc(userDocumentRef);
    userData.email = user.email;
    if (!docSnap.exists()){
      setDoc(userDocumentRef, userData);
    };
  };
  
  if (!user) {
    return <Navigate to="/signin" />
  } else if (judge != ""){
    registerTeachers()
    return <Navigate to="/TeachersProfile" />
  } else {
    if (auth.currentUser.emailVerified) {
      judgeDocumentExists()
    } else {
      return <Navigate to="/failedauth" />
    };
  };
};

export default Root;
import { auth } from '../firebase';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import Data from '../DbDoshisha.json';
import teachersData from '../teachers.json';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const TeachersConsole = () => {
    const [data, setData] = useState();
    const [studentData, setSutudentData] = useState();
    const { user } = useAuthContext();
    const userDocumentRef = doc(db, 'teachers', user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            setData(data);
        });
        // const studentDocumentRef = doc(db, 'register', data.class)
        // getDoc(studentDocumentRef).then((sRef)=>{
        //     console.log(sRef.data())
        //     const sData = sRef.data();
        //     setSutudentData(sData);
        // })
        console.log(data)
        console.log(studentData)
    },[]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const judge = location.state ? location.state.judge:"";

//   const judgeDocumentExists = async () =>{
//     const userData = Data;
//     const userDocumentRef = doc(db, 'users', user.uid);
//     const docSnap = await getDoc(userDocumentRef);
//     userData.email = user.email;
//     if (!docSnap.exists()) {
//       setDoc(userDocumentRef, userData);
//       navigate('/inputfiveitems')
//     };
//   };

//   const registerTeachers = async () => {
//     const userData = teachersData;
//     const userDocumentRef = doc(db, 'teachers', user.uid);
//     const docSnap = await getDoc(userDocumentRef);
//     userData.email = user.email;
//     if (!docSnap.exists()){
//       setDoc(userDocumentRef, userData);
//     };
//   };

    const sidebar = {
        position:"fixed",
        left: 0,
        minHeight: "100vh",
        width: "250px",
        backgroundColor: "rgba(114, 119, 120, .5)",
        color: "white"
    };
    const serch = {

    };
    const member = {
        borderBottom: "1px solid white",
        padding: "10px 0"
    }
  
  return (
    <div>
        <div style={sidebar}>
            <div style={{display:"flex"}}>
                <input type="serch" style={serch} />
                <button>検索</button>
            </div>
            <div>1年2組</div>
            <div style={{textAlign:"center"}}>
                {/* {
                    studentData.map((list, index)=>
                        <div key={index}>{list.name}</div>
                    )
                } */}
                <div style={member}>22番 松田理沙</div>
            </div>
        </div>
        <div style={{marginLeft: "250px"}}>
            <Tabs>
                <TabList>
                <Tab>HOME</Tab>
                <Tab>About</Tab>
                <Tab>Contact</Tab>
                </TabList>

                <TabPanel>
                <h1>HOMEです</h1>
                </TabPanel>
                <TabPanel>
                <h1>Aboutです</h1>
                </TabPanel>
                <TabPanel>
                <h1>Contactです</h1>
                </TabPanel>
            </Tabs>

        </div>
    </div>
  )
};

export default TeachersConsole;
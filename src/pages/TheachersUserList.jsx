import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const TheachersUserList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const teachersClass = location.state.teachersClass
  const userDocumentRef = doc(db, 'register', teachersClass);
  const [userData, setUserData] = useState(null)

  const handleClick = (event) => {
    const student = event.target.innerHTML
    userData.forEach(data => {
      if (data.name == student) {
        console.log(data.uid)
        navigate('/TeachersConsole',{state:{data:data,teachersClass:teachersClass}})
        return 
      }
    });
  }

  useEffect(()=>{
    getDoc(userDocumentRef).then((ref)=>{
      setUserData(ref.data().member)
    })
  },[])

  return (
    <div style={{margin: "40px",display: "flex", justifyContent: "center", alignItems: "center", height: "100%", minHeight:"80vh"}}>
      <div className="">
        <div style={{marginLeft: "-40px", color: "#1A4F83", borderLeft: "2px solid #43CBC3", paddingLeft:"10px",fontSize: "20px"}}>生徒一覧</div>
        {
        userData?(
          <div>
            {
              userData.map((data,index)=>
              <div key={index} onClick={handleClick} name={data.name}>
                <p>{data.name}</p>
              </div>
              )
            }
          </div>
        ):(
          <></>
        ) 
      }

      </div>
    </div>
  )
}

export default TheachersUserList
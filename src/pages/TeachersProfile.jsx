import React from 'react';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {useNavigate,} from 'react-router-dom'


const TeachersProfile = () => {
    const { user } = useAuthContext();
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const userDocumentRef = doc(db, 'teachers', user.uid);
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        await getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const teachersClass = year + "-" + event.target.grade.value + "-" + event.target.class.value;
            data.class = teachersClass;
            setDoc(userDocumentRef, data, {merge:true});
            navigate('/TheachersUserList',{state:{teachersClass:teachersClass}})
        })
    }
  
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <form onSubmit={handleSubmit}>
            <div style={{color: "#1A4F83", borderLeft: "2px solid #43CBC3", marginBottom: "40px", paddingLeft:"10px",fontSize: "20px"}}>クラス検索</div>
            <div>
                <div style={{display: "flex", marginBottom: "40px"}}>
                    <div style={{marginRight: "20px"}}>
                        <input name="grade" type="text" style={{width:60, height: "25px",border:"1px solid rgba(26, 79, 131, .5)", marginRight:"5px"}}/>
                        <label style={{color:"rgba(26, 79, 131, .75)"}}>年</label>
                    </div>
                    <div style={{marginRight: "20px"}}>
                        <input name="class" type="text" style={{width:60, height: "25px",border:"1px solid rgba(26, 79, 131, .5)", marginRight:"5px"}}/>
                        <label style={{color:"rgba(26, 79, 131, .75)"}}>組</label>
                    </div>
                </div>
                {/* <div style={{marginBottom: "13px"}}>
                    <div>年</div>
                    <input name="grade" type="text"></input>
                </div>
                <div style={{marginBottom: "13px"}}>
                    <div>クラス</div>
                    <input name="class" type="text"></input>
                </div> */}
            </div>
            <button style={{padding: "7px 80px", borderRadius: "20px",backgroundColor:"white",border:"1px solid #1A4F83", color: "#1A4F83"}}>次へ</button>
        </form>
    </div>
  );
};

export default TeachersProfile;
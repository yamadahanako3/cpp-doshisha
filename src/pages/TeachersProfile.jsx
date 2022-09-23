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
    <div>
        <form onSubmit={handleSubmit}>
            <div>ユーザー登録</div>
            <div>
                <div style={{marginBottom: "13px"}}>
                    <div>年</div>
                    <input name="grade" type="text"></input>
                </div>
                <div style={{marginBottom: "13px"}}>
                    <div>クラス</div>
                    <input name="class" type="text"></input>
                </div>
            </div>
            <button>次へ</button>
        </form>
    </div>
  );
};

export default TeachersProfile;
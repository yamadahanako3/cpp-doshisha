import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';


const TeachersProfile = () => {
    const { user } = useAuthContext();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const dateObj = new Date();
    let date1 = dateObj.getFullYear();
    const userDocumentRef = doc(db, 'teachers', user.uid);
    const handleSubmit = async(event) => {
        event.preventDefault();
        await getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            setData(data);
            console.log(data)
            console.log("a");
            data.class = date1 + "-" + event.target.grade.value + "-" + event.target.class.value;;
            setDoc(userDocumentRef, data, {merge:true});
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
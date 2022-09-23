import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const Profile = () => {
    const { user } = useAuthContext();
    const dateObj = new Date();
    let date1 = dateObj.getFullYear();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const ID = date1 + "-" + event.target.grade.value + "-" + event.target.class.value;
        const userDocumentRef = doc(db, 'register', ID);
        await getDoc(userDocumentRef).then(async(ref)=>{
            if (!ref.exists()){
                const defaultData = {
                    member:[
                        {
                            "num":event.target.num.value,
                            "uid":user.uid,
                            "name":event.target.name.value
                        }
                    ]
                }
                setDoc(userDocumentRef, defaultData)
            }else {
                const userData = ref.data();
                const list = userData.member;  
                const data = {
                    "num":event.target.num.value,
                    "uid":user.uid,
                    "name":event.target.name.value
                }   
                list.push(data)
                setDoc(userDocumentRef, data, {merge:true});
            }
        });
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
                        <div style={{marginBottom: "13px"}}>
                            <div>出席番号</div>
                            <input name="num" type="text"></input>
                        </div>
                        <div style={{marginBottom: "13px"}}>
                            <div>氏名</div>
                            <input name="name" type="text"></input>
                        </div>
                    </div>
                    <button>次へ</button>
                </form>
    </div>
  );
};

export default Profile;
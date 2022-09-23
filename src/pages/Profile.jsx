import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';
import Data from '../DbDoshisha.json';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';


const Profile = () => {
    const { user } = useAuthContext();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const dateObj = new Date();
    let date1 = dateObj.getFullYear();

    // const judgeDocumentExists = async () =>{
    const handleSubmit = async(event) => {
        event.preventDefault();
        const ID = date1 + "-" + event.target.grade.value + "-" + event.target.class.value;
        const userDocumentRef = doc(db, 'register', ID);
        const docSnap = await getDoc(userDocumentRef).then(async(ref)=>{
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
                console.log("a")
                setDoc(userDocumentRef, defaultData)
            }else {
                // console.log(docSnap.data())
                // console.log(data.member)
                console.log(ref.data())
                const userData = ref.data();
                setData(ref.data());
                console.log(data)
                let list = data.member;  
                console.log(list) 
                const a = {
                    "num":event.target.num.value,
                    "uid":user.uid,
                    "name":event.target.name.value
                }   
                list.push(a)
                console.log(list)
                console.log(data)
                setDoc(userDocumentRef, data, {merge:true});
                // setData(null)
    
            }
        });
        // const userData = docSnap.data()
        // if (!docSnap.exists()){
        //     const defaultData = {
        //         member:[
        //             {
        //                 "num":event.target.num.value,
        //                 "uid":user.uid,
        //                 "name":event.target.name.value
        //             }
        //         ]
        //     }
        //     setDoc(userDocumentRef, defaultData)
        // }else {
        //     // console.log(docSnap.data())
        //     // console.log(data.member)
        //     setData(docSnap.data());
        //     console.log(data)
        //     let list = data.member;  
        //     console.log(list)    
        //     list.push({
        //         "num":event.target.num.value,
        //         "uid":user.uid,
        //         "name":event.target.name.value
        //     })
        //     setDoc(userDocumentRef, data, {merge:true});
        //     // setData(null)

        // }
    }
    // const docSnap = await getDoc(userDocumentRef);
    // userData.email = user.email;
    // if (!docSnap.exists()) {
    // navigate('/inputfiveitems')
    // };
//   } ;
  
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
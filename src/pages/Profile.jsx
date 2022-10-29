import { useAuthContext } from '../context/Authcontext';
import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const { user } = useAuthContext();
    const dateObj = new Date();
    const navigate = useNavigate();
    let date1 = dateObj.getFullYear();
    const lists = [
        {title:"年",name:"grade"},
        {title:"クラス",name:"class"},
        {title:"出席番号",name:"num"},
        {title:"名前",name:"name"},
    ]
    const [datas, setDatas] = useState()
    useEffect(()=>{
        getDoc(doc(db,'users',user.uid)).then((datas)=>{
            const data = datas.data()
            const key = Object.keys(data.user_info)
            const value = Object.values(data.user_info)
            for (let i in key) {
                document.getElementById(key[i]).value = value[i]
            }
            setDatas(datas.data())
        })
    },[])
    const handleSubmit = async(event) => {
        event.preventDefault();
        const ID = date1 + "-" + event.target.grade.value + "-" + event.target.class.value;
        const userDocumentRef = doc(db, 'register', ID);
        const v = {
            name:event.target.name.value,
            num:event.target.num.value,
            class:event.target.class.value,
            grade:event.target.grade.value,
        }
        datas["user_info"] = v
        setDoc(doc(db,'users',user.uid),datas)
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
            navigate('/home')
        });
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>ユーザー登録</div>
            <div>
                {
                    lists.map((list, index)=>
                        <div key={index} style={{marginBottom: "13px"}} >
                            <div>{list.title}</div>
                            <input name={list.name} type="text" id={list.name}/>
                        </div>
                    )
                }
            </div>
            <button>次へ</button>
        </form>
    </div>
  );
};

export default Profile;
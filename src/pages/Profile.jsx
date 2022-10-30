import {Header} from '../molecules/index';
import { useAuthContext } from '../context/Authcontext';
import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const { user } = useAuthContext();
    const dateObj = new Date();
    const navigate = useNavigate();
    const height = (window.innerHeight - 200) + "px";
    let date1 = dateObj.getFullYear();
    const lists = [
        {title:"年",name:"grade"},
        {title:"組",name:"class"},
        {title:"番",name:"num"},
        // {title:"名前",name:"name"},
    ]
    const [datas, setDatas] = useState()
    useEffect(()=>{
        getDoc(doc(db,'users',user.uid)).then((datas)=>{
            const data = datas.data()
            if (data.user_info) {
                const key = Object.keys(data.user_info)
                const value = Object.values(data.user_info)
                for (let i in key) {
                    document.getElementById(key[i]).value = value[i]
                }
            }
            setDatas(datas.data())
        })
    },[])
    const handleSubmit = async(event) => {
        event.preventDefault();
        const ID = date1 + "-" + event.target.grade.value + "-" + event.target.class.value;
        const userDocumentRef = doc(db, 'register', ID);
        const update_data = datas
        const v = {
            name:event.target.name.value,
            num:event.target.num.value,
            class:event.target.class.value,
            grade:event.target.grade.value,
        }
        update_data["user_info"] = v
        setDoc(doc(db,'users',user.uid),update_data)
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
                setDoc(userDocumentRef, userData, {merge:true});
            }
        }).catch((e)=>{
            console.log(e.message)
        });
        navigate('/home')
    }

    const title = {
        paddingTop: "150px",
        marginLeft: "40px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "25px"
    };
    const form = {
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const label = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px"
    };
    const input = {
        width: "260px",
        border: "none",
        borderBottom: "1px solid rgba(26, 79, 131, .5)"
    };
    const button = {
        marginTop: "30px",
        color: "white",
        padding: "8px 100px",
        backgroundColor: "#43CBC3",
        border: "none",
        borderRadius: "20px",
        fontSize: "15px"
    };
    return(
    <div>
        <Header />
        <div style={title}>プロフィール</div>
        <form onSubmit={handleSubmit} style={form}>
            <div style={{display:"flex"}}>
                {
                    lists.map((list, index)=>
                        <div key={index} style={{padding: "18px"}} >
                            <input name={list.name} type="text" id={list.name} style={{width:40,border:"1px solid rgba(26, 79, 131, .5)"}}/>
                            <label style={{color:"rgba(26, 79, 131, .75)"}}>{list.title}</label>
                        </div>
                    )
                }
            </div>
            <div style={{marginTop: "30px"}}>
                <div style={label}>名前</div>
                <input style={input} name="name" type="text" id="name"></input>
            </div>
            <button style={button}>次へ</button>
        </form>
    </div>
    );
};

export default Profile;
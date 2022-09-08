import React from 'react';
import { Header } from '../molecules/index';
import { CompleteBookMark } from '../atoms/index';
import 'swiper/css';
import { useAuthContext } from '../context/Authcontext';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';


const Complete = () => {
    const { user } = useAuthContext();
    const [userData, setData] = useState([]);
    const userDocumentRef = doc(db, 'users', user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data.goalCard;
            let lists = [];
            for(let i in parent){
                lists.push(parent[i]);
            }
            setData(lists)
        });
    },[]);

    return (
        <div style={{minHeight: "100vh",backgroundColor: "#F4F6F9", paddingTop:"100px"}}>
            <Header />
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                {
                    userData.map((list, index)=>
                        <div key={index} style={{display: list.ratio!="" ? "block" : "none"}}>
                            <CompleteBookMark text={list.item} link="/completecard" color="orange" ratio={list.ratio} goalContent1={list.goal} goalContent2={list.result}  />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Complete;
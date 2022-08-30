import React from 'react';
import { Header, GoalCard } from '../molecules/index';
import { InputButton } from '../atoms/index';
import { CreateButton } from '../atoms/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import { useAuthContext } from '../context/Authcontext';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';


const GoalAndEvaluation = () => {
    const { user } = useAuthContext();
    const [userData, setData] = useState([]);
    const userDocumentRef = doc(db, 'users', user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data.first_grader.startingYear.ability;
            let lists = [];
            for(let i in parent){
                lists.push(parent[i]);
            }
            setData(lists)
        });
    },[]);

    const title = {
        fontSize: "23px",
        color: "rgba(26, 79, 131, 1)",
        marginLeft: "calc(50% - 140px)",
        marginBottom: "30px"
    }
    const buttons = {
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={{backgroundColor: "#F4F6F9"}}>
            <Header />
            <div>
                <div style={title}>目標と評価</div>
                <Swiper modules={[Navigation, Pagination]} >
                    {
                        userData.map((list)=>
                            <SwiperSlide key={list.item} style={{display: "flex",justifyContent: "center"}}><GoalCard item={list.item} goalContent1={list.goal} goalContent2={list.result} ratio={list.ratio} /></SwiperSlide>
                            )
                    }
                </Swiper>
            </div>
            <div style={buttons}>
                <CreateButton text="目標カレンダー" link='/signin' />
            </div>
            <InputButton />
        </div>
    );
};

export default GoalAndEvaluation;
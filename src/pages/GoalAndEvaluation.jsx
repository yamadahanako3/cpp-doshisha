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
    const [userData, setData] = useState([{ content: "", item: ""}]);
    const userDocumentRef = doc(db, 'users', user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const content = data.first_grader.startingYear.goal;
            const item = data.first_grader.startingYear.goalItem;
            const goalData = [
                [content.self_as_doshishaStudent,item.self_as_doshishaStudent],
                [content.communication,item.communication],
                [content.planning, item.planning],
                [content.responsiveness, item.responsiveness],
                [content.self_management, item.self_management]
            ];

            goalData.slice(0, goalData.length).forEach((list)=>{
                setData((prevState)=>([...prevState, {content: list[0],item: list[1]}]));
            });
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
                        userData.slice(1, userData.length).map((list, index)=>
                            <SwiperSlide key={index} style={{display: "flex",justifyContent: "center"}}><GoalCard item={list.item} goalContent1={list.content} /></SwiperSlide>
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
import React from 'react';
import { Header, GoalCard } from '../molecules/index';
import { InputButton } from '../atoms/index';
import { CreateButton } from '../atoms/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { useAuthContext } from '../context/Authcontext';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

const Goal = () => {
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
            console.log(lists);
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
    const style="background-color: lightgray;border-radius:50%;width: 9px;height: 9px;float:left;margin:2px;";

    const pagination={
        clickable: true,
        renderBullet: function(index, className){
            return '<div class='+className+ ' style="'+style+'">'+ ""+'</div>'
        }
    }

    return (
        <div style={{minHeight: "100vh",backgroundColor: "#F4F6F9"}}>
            <Header />
            <div>
                <div style={title}>目標と評価</div>
                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                    {
                        userData.map((list)=>
                            <SwiperSlide key={list.item} style={{display: list.ratio=="" ? "flex" : "none",justifyContent: "center"}}><GoalCard now={list.now} span={list.span} item={list.item} goalContent1={list.goal} color={list.color!="" ? list.color : "#FFAE80"} /></SwiperSlide>
                            )
                    }
                </Swiper>
            </div>
            <div style={buttons}>
                <CreateButton text="目標カレンダー" link='/Calendar' />
                <CreateButton text="達成したカード" link='/complete' />
                <CreateButton text="評価する" link='/evaluategoal' />
            </div>
            <InputButton link="/addgoal" />
        </div>
    );
};

export default Goal;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { Navigation, Pagination } from 'swiper';
import Template from '../template.json';
import { GoNextButton } from '../atoms/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const lists = Template.inputgoal;

const InputGoal = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const userDocumentRef = doc(db, 'users', user.uid);
    const [data, setData] = useState(null);
    useEffect(()=>{
        getDoc(userDocumentRef).then((a)=>{
            setData(a.data());
        });
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        lists.forEach((list)=>{
            data.first_grader.startingYear.goal[list.key] = event.currentTarget.elements[list.key].value;
        });
        setDoc(userDocumentRef, data, { merge: true });
        navigate('/home');
    };

    const title = {
        paddingTop: "60px",
        fontSize: "23px",
        color: "rgba(26, 79, 131, 1)",
        marginLeft: "calc(50% - 140px)",
        marginBottom: "30px"
    };
    const label = {
        marginLeft: "40px",
        position: "absolute",
        left: 0,
        color: "rgba(26, 79, 131, .75)",
    };
    const abilityName = {
        textAlign: "center",
        width: "200px",
        marginRight: "40px",
        position: "absolute",
        right: 0,
        color: "rgba(26, 79, 131, .75)",
        border: "1px solid rgba(26, 79, 131, .25)",
        borderRadius: "5px",
        padding: "5px 3px",
    };
    const free = {
        position: "relative",
        width: "250px",
        height: "200px",
        margin: "100px 0px",
        padding: "0px 10px",
        color: "rgba(26, 79, 131, .75)",
        border: "1px solid rgba(26, 79, 131, .25)",
        borderRadius: "5px",
    };
    const textarea = {
        marginTop: "5px",
        width: "90%",
        height: "calc(100% - 55px)",
        border: "none",
        fontSize: "18px"
    };
    const sub = {
        paddingTop: "50px"
    };

    return (
        <div>
            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .1)"}}>
                <div style={title}>目標を立てる</div>
            </div>
            <form onSubmit={handleSubmit}>
                <Swiper modules={[Navigation, Pagination]} navigation={true}>
                    {
                        lists.map((list)=>
                            <SwiperSlide key={list.key} style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                                <div>
                                    <div style={sub}>
                                        <label style={label}>目標</label>
                                        <div style={abilityName}>{list.text}</div>
                                    </div>
                                    <div style={free}>
                                        <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                                        <textarea style={textarea} name={list.key} wrap="soft" placeholder="目標を記入しよう"></textarea>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <GoNextButton />
            </form>
        </div>
    );
};

export default InputGoal;
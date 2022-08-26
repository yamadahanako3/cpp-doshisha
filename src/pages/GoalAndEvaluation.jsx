import React from 'react';
import { Header, Footer, GoalCard } from '../molecules/index';
import { CreateButton } from '../atoms/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

const GoalAndEvaluation = () => {
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
                    <SwiperSlide style={{display: "flex",justifyContent: "center"}}><GoalCard /></SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center"}}><GoalCard /></SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center"}}><GoalCard /></SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center"}}><GoalCard /></SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center"}}><GoalCard /></SwiperSlide>
                </Swiper>
            </div>
            <Footer />
            <div style={buttons}>
                <CreateButton text="目標カレンダー" link='/signin' />
            </div>
        </div>
    );
};

export default GoalAndEvaluation;
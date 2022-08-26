import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper';


const InputGoal = () => {
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
            {/* <div style={sub}>
                <label style={label}>目標</label>
                <div style={abilityName}>同志社国際生としての力</div>
            </div>
            <div style={free}>
                <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
            </div> */}
            <Swiper modules={[Navigation, Pagination]} navigation={true}>
                    <SwiperSlide style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                        <div style={sub}>
                            <label style={label}>目標</label>
                            <div style={abilityName}>同志社国際生としての力</div>
                        </div>
                        <div style={free}>
                            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                            <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                        <div style={sub}>
                            <label style={label}>目標</label>
                            <div style={abilityName}>人間関係形成・社会形成能力</div>
                        </div>
                        <div style={free}>
                            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                            <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                        <div style={sub}>
                            <label style={label}>目標</label>
                            <div style={abilityName}>キャリアプランニング能力</div>
                        </div>
                        <div style={free}>
                            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                            <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                        <div style={sub}>
                            <label style={label}>目標</label>
                            <div style={abilityName}>課題対応能力</div>
                        </div>
                        <div style={free}>
                            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                            <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{display: "flex",justifyContent: "center",paddingTop: "30px"}}>
                        <div style={sub}>
                            <label style={label}>目標</label>
                            <div style={abilityName}>自己理解・自己管理能力</div>
                        </div>
                        <div style={free}>
                            <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                            <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
        </div>
    );
};

export default InputGoal;
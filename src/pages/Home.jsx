import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { Header } from '../molecules/index';
import { getDoc, doc } from 'firebase/firestore';
import { CreateButton, RadarChart } from '../atoms/index';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [firstData1, setFirstData1] = useState(null);
    const [firstData2, setFirstData2] = useState(null);
    const [secondData1, setSecondData1] = useState(null);
    const [secondData2, setSecondData2] = useState(null);
    const [thirdData1, setThirdData1] = useState(null);
    const [thirdData2, setThirdData2] = useState(null);
    const userDocumentRef = doc(db, 'users', user.uid);
    const body = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "70px",
    };
    const main = {
        margin: "30px auto",
        width: "280px",
        height: "320px",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const mainTitle = {
        color: "#1A4F83",
        fontSize: "20px",
    };
    const sub = {
        fontSize: "10px",
        color: "#747D88",
        marginBottom: "3px",
    };
    
    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data;
            let firstLists1 = [];
            let firstLists2 = [];
            let secondLists1 = [];
            let secondLists2 = [];
            let thirdLists1 = [];
            let thirdLists2 = [];

            for(let i = 0 ; i < 5 ; i++){
                firstLists1.push(parent.first_grader.ability[i].point1);
                firstLists2.push(parent.first_grader.ability[i].point2);
                secondLists1.push(parent.second_grader.ability[i].point1);
                secondLists2.push(parent.second_grader.ability[i].point2);
                thirdLists1.push(parent.third_grader.ability[i].point1);
                thirdLists2.push(parent.third_grader.ability[i].point2);
            }
            console.log("a");
            setFirstData1(firstLists1);
            setFirstData2(firstLists2);
            setSecondData1(secondLists1);
            setSecondData2(secondLists2);
            setThirdData1(thirdLists1);
            setThirdData2(thirdLists2);
        });
    },[]);

    const handleClick1 = () => {
        navigate('/abilitychart',{state:{grade: 1}});
    }
    const handleClick2 = () => {
        navigate('/abilitychart',{state:{grade: 2}});
    }
    const handleClick3 = () => {
        navigate('/abilitychart',{state:{grade: 3}});
    }
    
    if (!user) {
        return <Navigate to='/signin' />;
    } else {
        return (
            <div style={{backgroundColor:"#F4F6F9",minHeight: "100vh",maxWidth:"500px"}}>
                <Header />
                <div style={body}>
                    <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" style={{width: "100%"}}>
                        <SwiperSlide><div style={main} onClick={handleClick1} >
                            <div style={mainTitle}>高校一年生</div>
                            <p style={sub}>これは例文です。これは例文です。これは例文です。</p>
                            <RadarChart data1={firstData1} data2={firstData2} />
                        </div></SwiperSlide>
                        <SwiperSlide><div style={main} onClick={handleClick2} >
                            <div style={mainTitle}>高校二年生</div>
                            <p style={sub}>これは例文です。これは例文です。これは例文です。</p>
                            <RadarChart data1={secondData1} data2={secondData2} />
                        </div></SwiperSlide>
                        <SwiperSlide><div style={main} onClick={handleClick3} >
                            <div style={mainTitle}>高校三年生</div>
                            <p style={sub}>これは例文です。これは例文です。これは例文です。</p>
                            <RadarChart data1={thirdData1} data2={thirdData2} />
                        </div></SwiperSlide>
                    </Swiper>
                    <CreateButton text="目標カード" link="/goal" />
                    <CreateButton text="高校１年生" link="/recordnow" grade="1" />
                    <CreateButton text="高校２年生" link="/recordnow" grade="2" />
                    <CreateButton text="高校３年生" link="/recordnow" grade="3" />
                    <CreateButton text="これまでとこれから" link="/signup" />
                </div>  
            </div>
        );
    };
};

export default Home;
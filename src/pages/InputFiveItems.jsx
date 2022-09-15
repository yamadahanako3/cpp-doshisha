import { Header, InputCard } from '../molecules/index';
import { CheckButton } from '../atoms/index';
import { useAuthContext } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Template from '../template.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

const lists = Template.inputability;

const InputFiveItems = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const userDocumentRef = doc(db, 'users', user.uid);
    const [data, setData] = useState(null);
    const [abilityData, setAbilityData] = useState([0, 0, 0, 0, 0]);
    const [error_message, setErrorMessage] = useState("")
    
    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            console.log("a");
            setData(ref.data());
        })
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const parent = data.first_grader.ability;
        for(let i = 0; i < 5; i++){
            if (!abilityData[i] || !event.target[lists[i].textAreaName1].value) {
                setErrorMessage("全て入力してください")
                return
            }
            parent[i].point1 = abilityData[i];
            parent[i].goal = event.target[lists[i].textAreaName1].value;
        };
        setDoc(userDocumentRef, data, {merge: true});
        navigate('/home');
    };

    const body = {
        backgroundColor: "#F4F6F9",
        height: "100vh"
    };
    const title = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "24px",
    };
    const underTitle = {
        color: "#43CBC3",
        fontSize: "12px",
        fontWeight: "bold",
    };

    return (
        <div style={body}>
            <Header />
            <div style={{paddingTop: "80px", marginLeft: "20px"}}>
                <div style={title}>今の自分を評価しよう</div>
                <div style={underTitle}>卒業までに身に付けたい力について</div>
            </div>
            <form onSubmit={handleSubmit}>
                <Swiper modules={[Navigation, Pagination]} >
                    {
                        lists.map((list, index)=>
                            <SwiperSlide style={{display: "flex",justifyContent: "center"}} key={index}>
                                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} key={index}>
                                    <InputCard num={index} abilityData={abilityData} setAbilityData={setAbilityData}  theme={list.text} discription={list.discription} sliderName={list.sliderName} textareaName={list.textAreaName1} />
                                </div>  
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <CheckButton style={{position: "fixed",right:"calc(10% - 25px)"}} />
            </form>
            <p style={{color:"red", marginLeft:20}}>{error_message}</p>
        </div>
    );
};

export default InputFiveItems;
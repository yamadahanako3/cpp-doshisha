import { Header, EvaluateCard } from '../molecules/index';
import { CheckButton } from '../atoms/index';
import { useAuthContext } from '../context/Authcontext';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Template from '../template.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const lists = Template.inputability;

const EvaluateFiveItems = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const userDocumentRef = doc(db, 'users', user.uid);
    const grade = location.state ? location.state.grade : "";
    const [data, setData] = useState(null);
    const [abilityData, setAbilityData] = useState([0, 0, 0, 0, 0]);
    const [defaultData, setDefaultData] = useState(location.state ? location.state.data:"");
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

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            setData(ref.data());
        })
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let parent;
        if(grade == 1){
            parent = data.first_grader.ability;
        }else if(grade == 2){
            parent = data.second_grader.ability;
        }else if(grade == 3){
            parent = data.third_grader.ability;
        }
        for(let i = 0; i < 5; i++){
            parent[i].point2 = abilityData[i];;
            parent[i].result = event.target[lists[i].textAreaName1].value;
            parent[i].nextGoal = event.target[lists[i].textAreaName2].value;
        };
        setDoc(userDocumentRef, data, {merge: true});
        navigate('/home');
    };

    return (
        <div style={body}>
            <Header />
            <div style={{paddingTop: "80px", marginLeft: "20px"}}>
                <div style={title}>今の自分を評価しよう</div>
                <div style={underTitle}>卒業までに身に付けたい力について</div>
            </div>
            <form onSubmit={handleSubmit}>
                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} >
                    {
                        lists.map((list, index)=>
                            <SwiperSlide style={{display: "flex",justifyContent: "center"}} key={index}>
                                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} key={index}>
                                    <EvaluateCard data={defaultData[index]} num={index} abilityData={abilityData} setAbilityData={setAbilityData}  theme={list.text} discription={list.discription} sliderName={list.sliderName} textareaName1={list.textAreaName1} textareaName2={list.textAreaName2} />
                                </div>  
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <CheckButton style={{position: "fixed",right:"calc(10% - 25px)"}} />
            </form>
        </div>
    );
};

export default EvaluateFiveItems;
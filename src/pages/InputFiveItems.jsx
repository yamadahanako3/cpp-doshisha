import { Header, InputCard } from '../molecules/index';
import { CheckButton,GoNextButton, GoPreButton } from '../atoms/index';
import 'swiper/css';
import { useAuthContext } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Template from '../template.json';

const lists = Template.inputability;

const InputFiveItems = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const userDocumentRef = doc(db, 'users', user.uid);
    const [data, setData] = useState(null);
    const [display, setDisplay] = useState(0);
    
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
            parent[i].point1 = event.target[lists[i].sliderName1].value;
            parent[i].goal = event.target[lists[i].textAreaName].value;
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
                <div style={{display: "flex",justifyContent: "center"}}>
                    {
                        lists.map((list, index)=>
                            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} key={index}>
                                <InputCard theme={list.text} discription={list.discription} sliderName={list.sliderName1} textareaName={list.textAreaName} display={display==index?"block":"none"} />
                            </div>
                        )
                    }
                </div>
                <CheckButton style={{position: "fixed",right:"calc(50% - 25px)"}} />
            </form>
            <GoNextButton onClick={()=>setDisplay((display+1)%5)}/>
            <GoPreButton onClick={()=>setDisplay((display+4)%5)}/>
        </div>
    );
};

export default InputFiveItems;
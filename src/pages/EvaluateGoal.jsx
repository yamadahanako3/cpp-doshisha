import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { CreateSlider, GoNextButton } from "../atoms/index";

const EvaluateGoal = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [data, setData] = useState(null);
    const [userGoalItem, setItem] = useState(null);
    const userDocumentRef = doc(db, 'users', user.uid);
    
    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            setData(ref.data())
            const parent = data.first_grader.startingYear.ability;
            let lists = [];
            for(let i in parent){
                lists.push(parent[i].item);
            }
            console.log(lists)
            setItem(lists);
        });
    },[]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const parent = data.first_grader.startingYear.ability;
        for(let i in parent){
            if(event.target.goalItem.value == parent[i].item){
                parent[i].ratio = event.target.sliderRatio.value;
                parent[i].result = event.target.freeResult.value;
            }
        };
        setDoc(userDocumentRef, data, { merge: true });
        navigate('/goalandevaluation');
    };

    const body = {
        margin: "60px 15%"
    };
    const title = {
        paddingBottom: "30px",
        color: "#1A4F83",
        fontSize: "24px",
        borderBottom: "1px solid rgba(26, 79, 131, .1)"
    };
    const form = {
        marginTop: "30px",
    };
    const label1 = {
        position: "absolute",
        left: 0,
        color: "rgba(26, 79, 131, .75)",
        fontSize: "15px"
    };
    const pullDown = {
        position: "absolute",
        right: 0        
    };
    const label2 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "15px"
    };
    const free = {
        padding: "5px",
        position: "relative",
        border: "1px solid rgba(26, 79, 131, .1)",
        borderRadius: "5px",
        height: "130px"
    };
    const freeTitle = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "15px",
        borderBottom: "1px solid rgba(26, 79, 131, .1)"
    };
    const textarea = {
        width: "98%",
        height: "calc(100% - 28px)",
        border: "none",
        fontSize: "15px"
    };

    return (
        <div style={body}>
            <div style={title}>自分を評価する</div>
            <form style={form} onSubmit={handleSubmit}>
                <div style={{display: "flex", position: "relative", height: "60px"}}>
                    <div style={label1}>項目</div>
                    <select style={pullDown} name="goalItem">
                        <option></option>
                        {
                            userGoalItem?.map((list, index)=>
                                <option key={index}>{list}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <div style={label2}>達成率</div>
                    <CreateSlider name="sliderRatio" color="#43CBC3" />
                </div>
                <div style={free}>
                    <div style={freeTitle}>自由記入欄</div>
                    <textarea style={textarea} placeholder="評価を具体的に書いてみよう" name="freeResult"></textarea>
                </div>
                <GoNextButton />
            </form>
        </div>
    );
};

export default EvaluateGoal;
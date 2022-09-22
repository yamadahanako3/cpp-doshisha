import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { Header, DetailAbility } from '../molecules/index';
import { getDoc, doc } from 'firebase/firestore';
import { RadarChart } from '../atoms/index';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

const AbilityChart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const [grade, setGrade] = useState(location.state ? location.state.grade : "");
    const [userData1, setData1] = useState(["","","","",""]);
    const [userData2, setData2] = useState(["","","","",""]);
    const [userData, setData] = useState([null, null, null, null, null]);
    const [ability, setAbility] = useState(null);
    const userDocumentRef = doc(db, 'users', user.uid);
    const text1 = userData1[0]=="" ? "4月の評価を入力する" : "4月の評価を修正する"
    const text2 = userData2[0]=="" ? "3月の評価を入力する" : "3月の評価を修正する"

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            let parent;
            let lists1 = [];
            let lists2 = [];
            let lists = [];
            if(grade == 1){
                parent = data.first_grader.ability;
            }else if(grade == 2){
                parent = data.second_grader.ability;
            }else if(grade == 3){
                parent = data.third_grader.ability;
            }
            for(let i = 0 ; i < 5 ; i++){
                lists1.push(parent[i].point1);
                lists2.push(parent[i].point2);
                lists.push(parent[i]);
            }
            console.log("a");
            setData1(lists1);
            setData2(lists2);
            setData(lists);
        });
    },[]);

    const handleClick1 = () => {
        navigate('/inputfiveitems',{state:{data:userData,grade:grade}});
    };
    const handleClick2 = () => {
        navigate('/evaluatefiveitems',{state:{data:userData,grade:grade}});
    };

    const body = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "70px",
    };
    const main = {
        width: "280px",
        height: "230px",
        marginBottom: "20px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const button1 = {
        marginTop: "10px",
        padding: "8px 30px",
        backgroundColor: "#43CBC3",
        color: "white",
        borderRadius: "20px",
        border: "none"
    };
    const button2 = {
        marginTop: "10px",
        padding: "8px 30px",
        backgroundColor: "#FFAE80",
        color: "white",
        borderRadius: "20px",
        border: "none"
    };
    
    return (
        <div style={{minHeight: "100vh"}}>
            <Header />
                <DetailAbility userData={userData??""} item={userData[ability]?.item} goal={userData[ability]?.goal} result={userData[ability]?.result} nextGoal={userData[ability]?.nextGoal} />
            <div style={body}>
                <div style={main}>
                    <RadarChart data1={userData1} data2={userData2} ability={ability} setAbility={setAbility} />
                </div>              
                <button style={button1} onClick={handleClick1}>{text1}</button>
                <button style={button2} onClick={handleClick2}>{text2}</button>
            </div>  
        </div>
    );
};

export default AbilityChart;
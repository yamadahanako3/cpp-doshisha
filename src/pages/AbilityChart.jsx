import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { Header } from '../molecules/index';
import { getDoc, doc } from 'firebase/firestore';
import { RadarChart } from '../atoms/index';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

const AbilityChart = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [userData1, setData1] = useState(null);
    const [userData2, setData2] = useState(null);
    const [userGoal, setGoal] = useState(null);

    const userDocumentRef = doc(db, 'users', user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data.first_grader.ability;
            let lists1 = [];
            let lists2 = [];
            let lists = [];
            for(let i = 0 ; i < 5 ; i++){
                lists1.push(parent[i].point1);
                lists2.push(parent[i].point2);
                lists.push(parent[i].goal);
            }
            console.log("a");
            setData1(lists1);
            setData2(lists2);
        });
    },[]);

    const handleClick = () => {
        navigate('/abilitychart');
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
        height: "320px",
        marginBottom: "20px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const title = {

    };
    const section = {

    };
    const sub = {

    };
    
    return (
        <div style={{height: "100vh"}}>
            <Header />
            <div style={body}>
                <div style={main} onClick={handleClick} >
                    <RadarChart data1={userData1} data2={userData2} />
                </div>
            </div>  
            <div>
                <div style={title}>

                </div>
                <div style={section}>
                    <div style={sub}>伸ばししたいところ</div>
                    <p></p>
                </div>
                <div style={section}>
                    <div style={sub}>伸ばししたいところ</div>
                    <p></p>

                </div>
                    <div style={sub}>伸ばししたいところ</div>
                    <p></p>
                <div style={section}>

                </div>
            </div>
        </div>
    );
};

export default AbilityChart;
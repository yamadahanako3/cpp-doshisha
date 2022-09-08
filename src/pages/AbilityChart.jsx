import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { Header, DetailAbility } from '../molecules/index';
import { getDoc, doc } from 'firebase/firestore';
import { RadarChart } from '../atoms/index';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

const AbilityChart = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [userData1, setData1] = useState(null);
    const [userData2, setData2] = useState(null);
    const [userData, setData] = useState([null, null, null, null, null]);
    const [ability, setAbility] = useState(null);
    // console.log(ability)
    console.log(userData[0]?.item)

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
                lists.push(parent[i]);
            }
            console.log("a");
            setData1(lists1);
            setData2(lists2);
            setData(lists);
            console.log(lists)
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
        height: "230px",
        marginBottom: "20px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const title = {

    };
    
    return (
        <div style={{height: "100vh",overflowY: "hidden"}}>
            <Header />
                {/* <DetailAbility userData={userData??""} item={ability!=null ? userData[ability]?.item : userData[0]?.item} goal={ability!=null ? userData[ability]?.goal : userData[0]?.goal} result={ability!=null ? userData[ability]?.result : userData[0]?.result} nextGoal={ability!=null ? userData[ability]?.nextGoal : userData[0]?.nextGoal} /> */}
                <DetailAbility userData={userData??""} item={userData[ability]?.item} goal={userData[ability]?.goal} result={userData[ability]?.result} nextGoal={userData[ability]?.nextGoal} />
            <div style={body}>
                <div style={main} onClick={handleClick} >
                    <RadarChart data1={userData1} data2={userData2} ability={ability} setAbility={setAbility} />
                </div>
            </div>  
            <div>
                <div style={title}>

                </div>
                {/* {
                    userData.map((data, index)=>
                        <div key={index}>
                            <div style={section}>
                                <div style={sub}>目標</div>
                                <p>{data.goal}</p>
                            </div>
                            <div style={section}>
                                <div style={sub}>成長できたところ</div>
                                <p>{data.result}</p>
                            </div>
                            <div style={section}>
                                <div style={sub}>さらに成長したいところ</div>
                                <p>{data.nextGoal}</p>
                            </div>
                        </div>
                    )
                } */}
                </div>
            </div>

    );
};

export default AbilityChart;
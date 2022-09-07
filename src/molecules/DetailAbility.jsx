import { MenuButton } from '../atoms/index';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const DetailAbility = (props) => {
    const [judge, setJudge] = useState(false);
    const [y, setY] = useState();
    const height = window.innerHeight-325;

    const handleClick = () => {
        if(judge){
            setJudge(false);
        }else{
            setJudge(true);
        }
    }

    // const handleMouseUp = (event) => {
    //     console.log(event);
    //     console.log(y);
    //     console.log(event.screenY);
    //     if((y - event.screenY) >= 20 ){
    //         setJudge(true);
    //     }else{
    //         setJudge(false)
    //     }
    // }


    const body1 = {
        position: "fixed",
        top: "325px",
        width: "100vw",
        height: {height},
        color: "white",
        backgroundColor: "#43CBC3",
        borderRadius: "22px 22px 0px 0px"
    }
    const body2 = {
        position: "fixed",
        top: "15%",
        width: "100vw",
        height: "85%",
        color: "white",
        backgroundColor: "#43CBC3",
        borderRadius: "22px 22px 0px 0px"
    }
    const title = {
        paddingTop: "20px",
        paddingBottom: "10px",
        fontWeight: "bold",
        textAlign: "center",
    }
    const section = {
        borderTop: "1px solid rgba(26, 79, 131, .1)",
        paddingTop: "10px",
        margin: "0 20px"
    };
    const sub = {
        fontWeight: "bold",
        fontSize: "15px",
    };
    const content1 = {
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        fontSize: "13px",
    
    };
    const content2 = {
        
    };
    
    
    return (
        <div>
            {/* {
                props.userData.map((data, index)=>
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
            <div style={judge ? body2 : body1} onClick={handleClick}>
                <div style={title}>{props.userData[0]?.item}</div>
                <div style={{margin: "10px"}}>
                    <div style={section}>
                        <div style={sub}>目標</div>
                        <p style={judge ? content2 : content1}>{props.userData[0]?.goal}</p>
                    </div>
                    <div style={section}>
                        <div style={sub}>成長できたところ</div>
                        <p style={judge ? content2 : content1}>{props.userData[0]?.result}</p>
                    </div>
                    <div style={section}>
                        <div style={sub}>さらに成長したいところ</div>
                        <p style={judge ? content2 : content1}>{props.userData[0]?.nextGoal}</p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default DetailAbility;
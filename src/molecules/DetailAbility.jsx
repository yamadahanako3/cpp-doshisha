import React, { useState } from 'react';

const DetailAbility = (props) => {
    const [judge, setJudge] = useState(false);
    const height = window.innerHeight-325;

    const handleClick = () => {
        if(judge){
            setJudge(false);
        }else{
            setJudge(true);
        };
    };

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
        height: "20px",
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        fontSize: "13px",
    };
    const content2 = {
        fontSize: "13px",
    };
    
    
    return (
        <div>
            <div style={judge ? body2 : body1} onClick={handleClick}>
                <div style={title}>{props.item}</div>
                <div style={{margin: "10px"}}>
                    <div style={section}>
                        <div style={sub}>目標</div>
                        <p style={judge ? content2 : content1}>{props.goal}</p>
                    </div>
                    <div style={section}>
                        <div style={sub}>成長できたところ</div>
                        <p style={judge ? content2 : content1}>{props.result}</p>
                    </div>
                    <div style={section}>
                        <div style={sub}>さらに成長したいところ</div>
                        <p style={judge ? content2 : content1}>{props.nextGoal}</p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default DetailAbility;
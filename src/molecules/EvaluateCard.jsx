import React, { useState } from 'react';

const EvaluateCard = (props) => {
    const [judge, getJudge] = useState([false, false, false, false, false, false]);
    const [text1, setText1] = useState(props.data ? props.data.result:"");
    const [text2, setText2] = useState(props.data ? props.data.nextGoal:"");
    const body = {
        margin: "20px",
        width: "300px",
        padding: "20px 0px",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .1)",
        backgroundColor: "white",
        borderRadius: "10px",
        display: props.display,
    };
    const theme = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "16px",
        fontWeight: "bold",
        borderLeft: "1.5px solid #FFAE80",
        paddingLeft: "10px"
    };
    const sub = {
        color: "rgba(26, 79, 131, .5)",
        fontSize: "13px",
    };
    const section1 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "40px",
        marginBottom: "20px"
    };
    const textarea = {
       border: "1px solid rgba(26, 79, 131, .5)",
       borderRadius: "5px",
       padding: "10px",
       height: "40px",
       width: "240px",
       fontSize: "17px",
       marginTop:"10px"
    };
    const numButton1 = {
        margin: "4px",
        padding: "7px 13px",
        borderRadius: "50%",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .2)",
        color: "rgba(26, 79, 131, .75)",
        backgroundColor: "white",
        border: "none",
    };
    const numButton2 = {
        margin: "4px",
        padding: "7px 13px",
        borderRadius: "50%",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .2)",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(3, 218, 197, 1)",
        border: "none",
    };

    const handleClick = (event) => {
        let list = [false, false, false, false, false, false];
        list[event.target.innerHTML] = true;
        getJudge(list);
        props.setAbilityData(
            props.abilityData.map((data,index)=>(index == event.target.name ? event.target.innerHTML : data))
        )
    };

    return (
        <div style={body}>
            <div style={{margin: "20px"}}>
                <div>
                    <div style={theme}>{props.theme}</div>
                    <p style={sub}>{props.discription}</p>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <div style={section1}>??????????????????</div>
                    <div style={{display:"flex"}}>
                        {
                            judge.map((data, index)=>
                                <a type="submit" key={index} onClick={handleClick} style={judge[index] ? numButton2:numButton1} name={props.num} >{index}</a>
                            )
                        }
                    </div>
                </div>
                <textarea value={text1} onChange={(e)=>setText1(e.target.value)} name={props.textareaName1} style={textarea} placeholder="?????????????????????" />
                <textarea value={text2} onChange={(e)=>setText2(e.target.value)} name={props.textareaName2} style={textarea} placeholder="??????????????????????????????" />
            </div>
        </div>
    );
};

export default EvaluateCard;
import React, { useState } from 'react';

const InputCard = (props) => {
    const [judge, getJudge] = useState([false, false, false, false, false, false]);
    const [data, setData] = useState(props.data)
    const [text, setText] = useState(data ? data.goal:"");
    
    const handleClick = (event) => {
        let list = [false, false, false, false, false, false];
        list[event.target.innerHTML] = true;
        getJudge(list);
        props.setAbilityData(
            props.abilityData.map((data,index)=>(index == event.target.name ? event.target.innerHTML : data))
        )
    };

    const body = {
        margin: "20px",
        width: "300px",
        height: "420px",
        padding: "10px 0px",
        marginBottom: "50px",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .1)",
        backgroundColor: "white",
        borderRadius: "10px",
        display:props.display
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
        marginTop: "30px",
        marginBottom: "20px"
    };
    const textarea = {
       border: "1px solid rgba(26, 79, 131, .5)",
       borderRadius: "5px",
       padding: "10px",
       height: "100px",
       width: "240px",
       fontSize: "17px",
       marginTop: "30px",
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

    return (
        <div style={body}>
            <div style={{margin: "20px"}}>
                <div>
                    <div style={theme}>{props.theme}</div>
                    <p style={sub}>{props.discription}</p>
                </div>
                <div>
                    <div style={section1}>現在の能力値</div>
                    <div style={{display:"flex"}}>
                        {
                            judge.map((data, index)=>
                                <a type="submit" key={index} onClick={handleClick} style={judge[index] ? numButton2:numButton1} name={props.num} >{index}</a>
                            )
                        }
                    </div>
                </div>
                <textarea onChange={(e)=>setText(e.target.value)} value={text} name={props.textareaName} style={textarea} placeholder="目標を入力" />
            </div>
        </div>
    );
};

export default InputCard;
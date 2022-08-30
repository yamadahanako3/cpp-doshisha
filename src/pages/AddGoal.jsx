import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const AddGoal = () => {
    const location = useLocation();
    const [item, setItem] = useState(location.state ? location.state.item:"");
    const [content, setContent] = useState(location.state ? location.state.content:"");

    // const height = window.innerHeight;
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
    // const label2 = {
    //     color: "rgba(26, 79, 131, .75)",
    //     fontSize: "15px"
    // };
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
            <div style={title}>目標を立てる</div>
            <form style={form}>
                <div style={{display: "flex", position: "relative", height: "60px"}}>
                    <div style={label1}>項目</div>
                    <input style={pullDown} onChange={(e)=>setItem(e.target.value)} value={item}></input>
                </div>
                <div style={free}>
                    <div style={freeTitle}>自由記入欄</div>
                    <textarea style={textarea} placeholder="評価を具体的に書いてみよう" onChange={(e)=>setContent(e.target.value)} value={content}></textarea>
                </div>
                <div style={{display: "flex", position: "relative", height: "60px", marginTop: "30px"}}>
                    <div style={label1}>期間</div>
                    <input style={pullDown}></input>
                </div>
            </form>
        </div>
    );
};

export default AddGoal;
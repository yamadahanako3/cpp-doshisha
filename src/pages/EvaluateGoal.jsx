import { CreateSlider } from "../atoms/index";

const EvaluateGoal = () => {
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
            <form style={form}>
                <div style={{display: "flex", position: "relative", height: "60px"}}>
                    <div style={label1}>項目</div>
                    <input style={pullDown}></input>
                </div>
                <div>
                    <div style={label2}>達成率</div>
                    <CreateSlider color="#43CBC3" />
                </div>
                <div style={free}>
                    <div style={freeTitle}>自由記入欄</div>
                    <textarea style={textarea} placeholder="評価を具体的に書いてみよう"></textarea>
                </div>
            </form>
        </div>
    );
};

export default EvaluateGoal;
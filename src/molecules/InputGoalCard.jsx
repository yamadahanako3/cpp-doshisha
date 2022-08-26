const InputGoalCard = (props) => {
    const text = props.text;
    const body = {
        width: "70%",
        height: "400px"
    }
    const label = {
        color: "rgba(26, 79, 131, .75)",
    };
    const abilityName = {
        padding: "10px",
        width: "200px",
        textAlign: "center",
        position: "absolute",
        right: 0,
        color: "rgba(26, 79, 131, .75)",
        border: "1px solid rgba(26, 79, 131, .25)",
        borderRadius: "5px",
    };
    const free = {
        padding: "0 10px",
        height: "60%",
        position: "relative",
        top: "50px",
        color: "rgba(26, 79, 131, .75)",
        border: "1px solid rgba(26, 79, 131, .25)",
        borderRadius: "5px",
    };
    const textarea = {
        marginTop: "10px",
        width: "90%",
        height: "70%",
        border: "none",
        fontSize: "18px"
    };
    const sub = {
        position: "relative",
        display: "flex",
    };

    return (
        <div style={body}>
            <div style={sub}>
                <label style={label}>目標</label>
                <div style={abilityName}>{text}</div>
            </div>
            <div style={free}>
                <div style={{borderBottom: "1px solid rgba(26, 79, 131, .25)",padding: "10px 0",fontWeight: "bold"}}>自由記入欄</div>
                <textarea style={textarea} wrap="soft" placeholder="目標を記入しよう"></textarea>
            </div>
        </div>
    );
};

export default InputGoalCard;
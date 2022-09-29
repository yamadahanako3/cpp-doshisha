const DetailAbility = (props) => {
    const sub = {
        fontWeight: "bold",
        fontSize: "15px",
    };
    const content1 = {
        height: "20px",
        // whiteSpace:"nowrap",
        // overflow:"hidden",
        // textOverflow:"ellipsis",
        fontSize: "13px",
    };
    const title1 = {
        backgroundColor: "rgba(67,293,195,.25)",
        color: "#747D88",
        padding: "10px"
    };
    const body = {
        position: "absolute",
        top: "425px",
        width: "100vw",
        fontWeight: "bold"
    };
    const section1 = {
        padding: "10px",
        borderBottom: "1px solid rgba(116,125,136,.1)",
        color: "#747D88",
    };
    const sub1 = {
        fontWeight: "bold"
    };
    
    return (
        <div>
            <div style={body}>
                <div style={title1}>{props.item}</div>
                <div>
                    <div style={{display: props.goal == "" ? "none":"block"}}>
                        <div style={section1}>
                            <div style={sub1}>目標</div>
                            <p style={content1}>{props.goal}</p>
                        </div>
                    </div>
                    <div style={{display: props.result == "" ? "none":"block"}}>
                    <div style={section1}>
                        <div style={sub}>成長できたところ</div>
                        <p style={content1}>{props.result}</p>
                    </div>
                        
                    </div>
                    <div style={{display: props.nextGoal == "" ? "none":"block"}}>

                    <div style={section1}>
                        <div style={sub}>さらに成長したいところ</div>
                        <p style={content1}>{props.nextGoal}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAbility;
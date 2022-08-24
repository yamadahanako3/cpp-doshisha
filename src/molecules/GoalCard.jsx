import {DoughnutChart} from "../atoms/index";

const GoalCard = () => {
    const body = {
        width: "280px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
    };
    const main = {
        display: "flex",
        alignItems: "center",
        paddingTop: "20px"
    };
    const title = {
        color: "#1A4F83",
        fontSize: "24px",
    };
    const sub = {
        color: "rgba(26, 79, 131, .5)",
        fontSize: "10px",
    };
    const content1 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        marginLeft: "-15px",
        paddingTop: "15px",
    };
    const content2 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        marginLeft: "20px",
        paddingTop: "20px",
        paddingBottom: "15px",
    };

    return (
        <div style={body}>
            <div style={{margin: "30px"}}>
                <div style={main}>
                    <DoughnutChart ratio="30" color="orange" />
                    <div style={{marginLeft: "20px"}}>
                        <div style={title}>目標</div>
                        <p style={sub}>4月12日→7月12日</p>
                    </div>
                </div>
                <div style={content1}>
                    <ul>
                        <li>目標の詳しい説明</li>
                        <li>なぜ実現したいのか</li>
                        <li>具体的にどのように取り組むか</li>
                        <li>目標を達成した自分へのメッセージ</li>
                    </ul>
                </div>
            </div>
            <div style={{backgroundColor: "rgba(244, 246, 249, .5)"}}>
                <div style={content2}>
                    <ul>
                        <li>努力したこと、成長したこと</li>
                        <li>反省すべきこととその理由</li>
                        <li>具体的にどのように取り組んだか</li>
                        <li>これから取り組みたいこと</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default GoalCard;
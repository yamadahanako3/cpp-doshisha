import { CreateSlider } from '../atoms/index';

const EvaluateCard = (props) => {

    const body = {
        margin: "20px",
        width: "300px",
        padding: "20px 0px",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .1)",
        backgroundColor: "white",
        borderRadius: "5px"
    }
    const theme = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "16px",
        fontWeight: "bold",
        borderLeft: "1.5px solid #FFAE80",
        paddingLeft: "10px"
    }
    const sub = {
        color: "rgba(26, 79, 131, .5)",
        fontSize: "13px",
    };
    const section1 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "40px"
    }
    const section2 = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "16px",
        fontWeight: "bold",
    }
    const textarea = {
       border: "1px solid rgba(26, 79, 131, .5)",
       borderRadius: "5px",
       padding: "10px",
       height: "100px",
       width: "240px",
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
                    <CreateSlider name={props.sliderName1} color="#FFAE80" mode="5" />
                </div>
                <div>
                    <div style={section2}>現在の達成率</div>
                    <CreateSlider name={props.sliderName2} color="#FFAE80" mode="100" />
                </div>
                <textarea name={props.textareaName} style={textarea} placeholder="目標を入力" />
            </div>
        </div>
    );
};

export default EvaluateCard;
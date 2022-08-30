import { CreateSlider } from '../atoms/index';

const InputCard = (props) => {



    const body = {
        margin: "20px",
        width: "300px",
        padding: "20px 0px",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, .1)"
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
                    <div style={theme}>同志社国際生としての力</div>
                    <p style={sub}>同志社の目指すキリスト教精神に基づく「知育・徳育」の学びによって育まれる力<br />（例） 国際理解・良心・自主自立など</p>
                </div>
                <div>
                    <div style={section1}>現在の能力値</div>
                    <CreateSlider color="#FFAE80" mode="5" />
                </div>
                <textarea style={textarea} placeholder="目標を入力" />
            </div>
        </div>
    );
};

export default InputCard;
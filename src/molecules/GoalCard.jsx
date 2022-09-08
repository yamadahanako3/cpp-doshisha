import {DoughnutChart} from "../atoms/index";
import { useNavigate } from 'react-router-dom';

const GoalCard = (props) => {
    const navigate = useNavigate();

    const handleClick1 = (event) => {
        event.preventDefault();
        navigate('/AddGoal', {state:{item:props.item,content:props.goalContent1}});
    }
    const handleClick2 = () => {
        navigate('/EvaluateGoal', {state:{item:props.item,content:props.goalContent2}});
    }
    

    const body = {
        width: "280px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
        paddingBottom: "50px",
        borderRadius: "5px",
    };
    const main = {
        display: "flex",
        alignItems: "center",
        paddingTop: "20px"
    };
    const title = {
        color: "#1A4F83",
        fontSize: "20px",
    };
    const sub = {
        color: "rgba(26, 79, 131, .5)",
        fontSize: "10px",
    };
    const content1 = {
        wordWrap: "break-word",
        width: "190px",
        height: "70px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        margin: "0px 15px",
        paddingTop: "15px",
    };
    const content2 = {
        wordWrap: "break-word",
        width: "190px",
        height: "100px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        margin: "0px 45px",
        paddingTop: "15px",
    };

    return (
        <div style={body}>
            <div style={{margin: "30px"}}>
                <div style={main}>
                    <DoughnutChart ratio={props.ratio} color="orange" />
                    <div style={{marginLeft: "20px"}}>
                        <div style={title}>{props.item}</div>
                        <p style={sub}>4月12日→7月12日</p>
                    </div>
                </div>
                <div style={content1} onClick={handleClick1}>
                    {props.goalContent1}
                </div>
            </div>
            <div style={{backgroundColor: "rgba(244, 246, 249, .5)",display: props.goalContent2 == null ? "none" : "block"}}>
                <div style={content2} onClick={handleClick2}>
                    {props.goalContent2}
                </div>

            </div>
        </div>
    );
};

export default GoalCard;
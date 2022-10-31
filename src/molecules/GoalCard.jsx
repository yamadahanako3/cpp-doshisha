import {DoughnutChart} from "../atoms/index";
import { useNavigate } from 'react-router-dom';

const GoalCard = (props) => {
    const navigate = useNavigate();
    const color = props.color;
    const span = props.span.split("-");
    const date2 = span[1] + '月' + span[2] + '日';
    const body = {
        width: props.teacher ? "200px" : "280px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
        paddingBottom: props.goalContent2 != null && props.teacher != null ? "200px" : "50px",
        height:props.teacher ? "300px" : "auto",
        borderRadius: "5px",
        borderStyle: "solid",
        borderColor: color,
    };
    const main = {
        display: "flex",
        alignItems: "center",
        paddingTop: props.teacher ? "10px" : "20px"
    };
    const title = {
        color: "#1A4F83",
        fontSize: props.teacher ? "16px" : "20px",
    };
    const sub = {
        color: "rgba(26, 79, 131, .5)",
        fontSize: "10px",
    };
    const content1 = {
        wordWrap: "break-word",
        width: props.teacher ? "120px" : "190px",
        height: "70px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        margin: "0px 15px",
        paddingTop: "15px",
    };
    const content2 = {
        wordWrap: "break-word",
        width: props.teacher ? "120px" : "190px",
        height: props.teacher ? "130px" : "190px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px",
        margin: "0px 45px",
        paddingTop: "15px",
    };

    const handleClick1 = (event) => {
        event.preventDefault();
        navigate('/AddGoal', {state:{item:props.item,content:props.goalContent1}});
    }
    const handleClick2 = () => {
        navigate('/EvaluateGoal', {state:{item:props.item,content:props.goalContent2}});
    }

    return (
        <div style={body}>
            <div style={{margin: "30px"}}>
                <div style={main}>
                    <DoughnutChart teacher={props.teacher ? "teacher" : null} ratio={props.ratio} color={color} />
                    <div style={{marginLeft: "20px"}}>
                        <div style={title}>{props.item}</div>
                        <p style={sub}>{props.now}→{date2}</p>
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
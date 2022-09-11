import { DoughnutChart } from '../atoms/index';
import { useNavigate } from 'react-router-dom';

const CompleteBookMark = (props) => {
    const navigate = useNavigate();
    const text = props.text;
    const ratio = props.ratio;
    const color = props.color;
    const goalContent1 = props.goalContent1;
    const goalContent2 = props.goalContent2;

    const handleClick = () => {
        navigate('/completecard', {state:{item:text,goalContent1:goalContent1,goalContent2:goalContent2,ratio:ratio,color:color}});
    }

    
    const button = {
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        padding: "15px",
        width: "280px",
        marginBottom: "20px",
        fontSize: "16px",
        color: "#1A4F83",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
        textDecoration: "none",
        borderStyle: "solid",
        borderColor: color
    };

    return (
        <div>
                <div style={button} onClick={handleClick}>
                    <div style={{marginRight: "20px"}}>
                        <DoughnutChart ratio={ratio} color={color} />
                    </div>
                        {text}
                </div>
        </div>
    );
};

export default CompleteBookMark;
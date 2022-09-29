import { useNavigate } from 'react-router-dom';

const CreateButton = (props) => {
    const navigate = useNavigate()
    const text = props.text;
    const link = props.link;

    const onClick = () =>{
        navigate(link,{state:{grade:props.grade}});
    }

    const button = {
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
    };

    return (
        <div style={{textAlign: "center"}}>
                <button style={button} onClick={onClick}>{text}</button>
        </div>
    );
};

export default CreateButton;
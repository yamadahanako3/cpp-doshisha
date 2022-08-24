import { Link } from 'react-router-dom';

const CreateButton = (props) => {
    const text = props.text;
    const link = props.link;
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
        <div>
            <Link to={link}>
                <button style={button}>{text}</button>
            </Link>
        </div>
    );
};

export default CreateButton;
import { useNavigate } from 'react-router-dom';

const InputButton = (props) => {
    const navigate = useNavigate();
    const link = props.link;
    const InputButton = {
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#F4F6F9",
        zIndex: "5"
    };
    const arroundButton = {
        position: "absolute",
        right: "15px",
        bottom: "15px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    };
    const button = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "5px",
        backgroundColor: "#03DAC5",
        border: "none",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)",
    };
    const line1 = {
        position: "absolute",
        top: "calc(50% - 7.5px)",
        left: "calc(50% - 1.5px)",
        width: "3px",
        height: "15px",
        backgroundColor: "white"
    };
    const line2 = {
        position: "absolute",
        top: "calc(50% - 1.5px)",
        left: "calc(50% - 7.5px)",
        width: "15px",
        height: "3px",
        backgroundColor: "white"
    };

    const handleClick = () => {
        navigate(link);
    }

    return (
        <div>
            <div style={InputButton} onClick={handleClick}>
                <div style={arroundButton}>
                    <button style={button}>
                        <div style={line1}></div>
                        <div style={line2}></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputButton;
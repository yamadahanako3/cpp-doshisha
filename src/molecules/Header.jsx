import { MenuButton } from '../atoms/index';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    const header = {
        backgroundColor:"#F4F6F9",
        position: "fixed",
        top: 0,
        width: "100vw",
        padding: "10px",
        color: "#43CBC3",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
        zIndex: "10",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, .14)"
    };
    const button = {
        position: "absolute",
        margin: "15px 10px"
    }

    return (
        <div style={{position:"relative"}}>
            <div style={header} onClick={handleClick}>
            <div style={button}>
                <MenuButton />
            </div>
                career passports 
            </div>
        </div>
    );
};

export default Header;
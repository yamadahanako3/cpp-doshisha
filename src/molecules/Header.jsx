import { MenuButton } from '../atoms/index';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    const header = {
        backgroundColor:"#F4F6F9",
        position: "absolute",
        top: 0,
        width: "100%",
        color: "#43CBC3",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, .14)"
    };
    const button = {
        position: "absolute",
        left: "10px",
        top: "0px",
        margin: "15px 10px"
    }

    return (
        <div style={{position:"relative"}}>
            <div style={header} >
            <div style={button}>
                <MenuButton />
            </div>
                <div onClick={handleClick} style={{padding:"10px"}}>
                career passports 
                </div>
            </div>
        </div>
    );
};

export default Header;
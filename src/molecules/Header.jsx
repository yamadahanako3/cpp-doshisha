import {MenuButton} from '../atoms/index'
const Header = () => {
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
        <div>
            <div style={button}>
                <MenuButton />
            </div>
            <div style={header}>career passport</div>
        </div>
    );
};

export default Header;
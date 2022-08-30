import {MenuButton} from '../atoms/index'
const Header = () => {
    const header = {
        backgroundColor:"#F4F6F9",
        position: "fixed",
        width: "100vw",
        padding: "10px",
        color: "#43CBC3",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
        zIndex: "10",
    };

    return (
        <div>
            <MenuButton />
            <div style={header}>career passport</div>
        </div>
    );
};

export default Header;
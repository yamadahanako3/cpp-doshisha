import { useState } from 'react';
import { CreateButton } from '../atoms/index';

const Footer = () => {
    const [judge, setJudge] = useState(true);
    const footer = {
        width: "100vw",
        height: "50px",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        borderTop: "1px solid white",
        backgroundColor: "#F4F6F9",
        boxShadow: "1px 2px 9px rgba(0, 0, 0, .3)",
        zIndex: "5"
    };
    const humburger = {
        position: "relative",
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };
    const line = {
        margin: "2px",
        width: "25px",
        height: "3px",
        backgroundColor: "rgba(26, 79, 131, .75)"
    };
    const arroundButton = {
        position: "absolute",
        right: "15px",
        bottom: "15px",
        width: "60px",
        height: "60px",
        borderColor: "white",
        borderRadius: "50%",
        backgroundColor: "white",
        boxShadow: '0px -2px 5px -3px rgba(0, 0, 0, .3) inset',
    };
    const [button, setButton] = useState({
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "5px",
        backgroundColor: "rgba(26, 79, 131, .25)",
        border: "none",
        boxShadow: "0px 0px 5px rgba(26, 79, 131, .1) inset",
    });
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
    const [inputMenu, setInputMenu] = useState({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F4F6F9",
        position: "absolute",
        top: "0",
        opacity: "0",
        transition: ".3s",
    });
    const ul = {
        listStyleType: "none",
        padding:0
    }

    const displayInputMenu = () => {
        if (judge) {
            setJudge(false);

            setButton({
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                margin: "5px",
                backgroundColor: "rgba(234, 49, 101, .75)",
                border: "none",
                boxShadow: "0px 0px 5px rgba(26, 79, 131, .1) inset",
                transform: "rotate(135deg)",
                transition: ".3s",
            });

            setInputMenu({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#F4F6F9",
                opacity: "1",
                top: 0,
                transition: ".3s",
            });
        } else {
            setJudge(true);

            setButton({
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                margin: "5px",
                backgroundColor: "rgba(26, 79, 131, .25)",
                border: "none",
                boxShadow: "0px 0px 5px rgba(26, 79, 131, .1) inset",
                transform: "rotate(0deg)",
                transition: ".3s",
            });

            setInputMenu({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#F4F6F9",
                position: "absolute",
                top: "0",        
                opacity: "0",
                transition: ".3s",
            });
        };
        
        return button;
    };

    return (
        <div>
            <div style={footer}>
                <div style={humburger}>
                    <div style={line}></div>
                    <div style={line}></div>
                    <div style={line}></div>
                </div>
                <div style={arroundButton}>
                    <button style={button} onClick={displayInputMenu}>
                        <div style={line1}></div>
                        <div style={line2}></div>
                    </button>
                </div>
            </div>
            <div style={inputMenu}>
                <ul style={ul}>
                    <li><CreateButton text="目標を立てる" link='./signin' /></li>
                    <li><CreateButton text="自分を評価する" link='./signin' /></li>
                    <li><CreateButton text="これまでを振り返る" link='./signin' /></li>
                    <li><CreateButton text="今の自分を記録する" link='./signin' /></li>
                    <li><CreateButton text="将来を考える" link='./signin' /></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
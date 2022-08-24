const Footer = () => {
    const footer = {
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        borderTop: "1px solid white",
        backgroundColor: "#F4F6F9",
        boxShadow: "1px 2px 9px rgba(0, 0, 0, .3)",
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
    const button = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "5px",
        backgroundColor: "rgba(26, 79, 131, .25)",
        border: "none",
        boxShadow: "0px 0px 5px rgba(26, 79, 131, .1) inset",
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


    return (
        <div style={footer}>
            <div style={humburger}>
                <div style={line}></div>
                <div style={line}></div>
                <div style={line}></div>
            </div>
            <div style={arroundButton}>
                <button style={button}>
                    <div style={line1}></div>
                    <div style={line2}></div>
                </button>
            </div>
        </div>
    );
};

export default Footer;
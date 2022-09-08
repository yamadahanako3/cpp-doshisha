const FirstHeader = () => {
    const FirstHeader = {
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

    return (
        <div>
            <div style={FirstHeader}>career passport</div>
        </div>
    );
};

export default FirstHeader;
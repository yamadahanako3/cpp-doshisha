import arrow from '../images/arrow.png';

const GoNextButton = () => {
  const button = {
    position: "fixed",
    right: "15px",
    bottom: "15px",
    width: "50px",
    height: "50px",
    border:"none",
    borderRadius: "50%",
    backgroundColor: "#03DAC5",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
  };

  return (
    <button style={button}><img src={arrow} /></button>
  );
};

export default GoNextButton;
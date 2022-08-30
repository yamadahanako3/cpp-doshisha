import arrow from '../images/arrow.png';

const GoPreButton = (props) => {
  const button = {
    position: "fixed",
    left: "15px",
    bottom: "15px",
    width: "50px",
    height: "50px",
    border:"none",
    borderRadius: "50%",
    backgroundColor: "rgba(234, 49, 101, .75)",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
  };

  return (
    <button style={button} onClick={props.onClick}><img style={{transform: "rotate(180deg)"}} src={arrow} alt=""/></button>
  );
};

export default GoPreButton;
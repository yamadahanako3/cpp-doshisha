import check from '../images/check.png';

const CheckButton = (props) => {
  console.log(props.style)
  const position = props.style ? props.style.position: "fixed"
  const right = props.style ? props.style.right: "15px"
  const button = {
    position: position,
    right: right,
    bottom: "15px",
    width: "50px",
    height: "50px",
    border:"none",
    borderRadius: "50%",
    backgroundColor: "#03DAC5",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
  };

  return (
    <button style={button}><img src={check} alt=""/></button>
  );
};

export default CheckButton;
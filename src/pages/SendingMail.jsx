import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../molecules/index';
import icon from '../images/trueIcon.png';
 
const SendingMail = () => {
  const height = window.innerHeight + "px";
  const navigate = useNavigate();
  const location = useLocation();
  const body = {
    height: height,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  const title = {
    color: "rgba(26, 79, 131, .5)",
    fontSize: "20px",
    marginTop: "30px",
  }
  const button = {
    border: "none",
    borderBottom: "1px solid #43CBC3",
    backgroundColor: "white",
    fontSize: "12px",
    color: "#43CBC3",
    marginTop: "30px",
  }

  const hundleGoLogin = () => {
    navigate('/signin');
  }

  return (
    <div>
      <Header />
      <div style={body}>
        <img src={icon} />
        <div style={title}>{location.state.title}</div>
        <button style={button} onClick={hundleGoLogin}>ログイン画面へ戻る</button>
      </div>
    </div>
  )
}

export default SendingMail
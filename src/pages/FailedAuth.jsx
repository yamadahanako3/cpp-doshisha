import failed from '../images/failed.png';
import { useNavigate } from 'react-router-dom';

const FailedAuth = () => {
  const height = window.innerHeight + "px";
  const navigate = useNavigate();
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
    textAlign: "center",
    width: "250px"
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
      <div style={body}>
        <img src={failed} />
        <div style={title}>メールアドレスで認証が完了していません</div>
        <button style={button} onClick={hundleGoLogin}>ログイン画面へ戻る</button>
      </div>
    </div>
  )
}

export default FailedAuth
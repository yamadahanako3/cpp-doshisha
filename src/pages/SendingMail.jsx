import { useNavigate, useLocation } from 'react-router-dom'
 
const SendingMail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hundleGoLogin = () => {
    navigate('/signin');
  }

  return (
    <div>
      <h1>{location.state.title}</h1>
      <button onClick={hundleGoLogin}>ログイン画面へ戻る</button>
    </div>
  )
}

export default SendingMail
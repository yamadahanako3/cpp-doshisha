import { useNavigate } from 'react-router-dom'
 
const SendingMail = () => {
  const navigate = useNavigate();

  const hundleGoLogin = () => {
    navigate('/signin');
  }

  return (
    <div>
      <h1>メールを送信しました</h1>
      <button onClick={hundleGoLogin}>ログイン画面へ戻る</button>
    </div>
  )
}

export default SendingMail
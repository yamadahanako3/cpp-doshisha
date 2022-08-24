import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    await sendPasswordResetEmail(auth, email.value).then(()=>{
      navigate('/sendingmail', {state:{title: 'パスワード再設定用メールを送信しました'}});
    }).catch((e)=>{
      console.log(e.message);
    });
  };

  return (
    <div>
      <h1>パスワード再設定</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input type='email' name='email' placeholder='email'/>
        </div>
        <button>送信</button>
      </form>
    </div>
  );
};

export default ResetPassword;
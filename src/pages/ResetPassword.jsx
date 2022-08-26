import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Header } from '../molecules/index';

const ResetPassword = () => {
  const height = window.innerHeight + "px";
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

  const title = {
    marginTop: "100px",
    color: "rgba(26, 79, 131, .75)",
    fontSize: "22px"
  };
  const underTitle = {
    marginBottom: "100px",
    color: "rgba(26, 79, 131, .5)",
    fontSize: "13px",
  }
  const form = {
    height: height,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  const label = {
    color: "rgba(26, 79, 131, .75)",
    fontSize: "15px"
  };
  const userInfo = {
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const input = {
    marginBottom: "30px",
    width: "260px",
    height: "50px",
    border: "none",
    borderBottom: "1px solid rgba(26, 79, 131, .5)",
  };
  const button = {
    marginTop: "10px",
    fontSize: "15px",
    color: "white",
    padding: "10px 100px",
    backgroundColor: "#43CBC3",
    border: "none",
    borderRadius: "20px"
  };

  return (
    <div>
      <Header />
        <div>
          <form style={form} onSubmit={handleSubmit}>
            <div style={title}>パスワード再設定</div>
            <p style={underTitle}>パスワード再設定用メールを送信します。</p>
            <div style={userInfo}>
                <div style={{marginBottom: "13px"}}>
                    <div style={label}>メールアドレス</div>
                    <input style={input} name="email" type="email"></input>
                </div>
            </div>
            <button style={button}>送信</button>
          </form>
        </div>
    </div>
  );
};

export default ResetPassword;
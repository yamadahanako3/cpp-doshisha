import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const RegExpInvalidEmail = /invalid-email/g;
    const RegExpNetworkRequestFailed = /network-request-failed/g;
    const RegExpInternalError = /internal-error/g;
    const RegExpWeakPassword = /weak-password/g;
    const RegExpEmailAlreadyInUse = /email-already-in-use/g;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password } = event.currentTarget.elements;
        if (name.value.length === 0) {
            setError('ユーザー名を入力してください')
            return
        }
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value).then(()=>{
                navigate('/');
            }).catch((e)=>{
                console.log(e)
                console.log(e.message)
                let error_message =""
                if (RegExpInvalidEmail.test(e.message)) {
                    error_message = "メールアドレスを入力してください"
                } else if (RegExpNetworkRequestFailed.test(e.message)) {
                    error_message = "ネットワークが不安定です"
                } else if (RegExpInternalError.test(e.message)) {
                    error_message = "パスワードを入力してください"
                } else if (RegExpWeakPassword.test(e.message)) {
                    error_message = "パスワードは６文字以上に設定してください"
                } else if (RegExpEmailAlreadyInUse.test(e.message)) {
                    error_message = "このメールアドレスは既に使用されています"
                } else {
                    error_message = e.message
                }
                    setError(error_message)
                })
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div>
            <h1>SitnUp</h1>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ユーザー名</label>
                    <input name="name" type="text" placeholder="name" />
                </div>
                <div>
                    <label>メールアドレス</label>
                    <input name="email" type="email" placeholder="email" />
                </div>
                <div>
                    <label>パスワード</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <button>register</button>
                </div>
            </form>
            <div>
                アカウントをお持ちの方は<Link to={'/signin'}>こちら</Link>から
            </div>
        </div>
    )
}

export default SignUp;
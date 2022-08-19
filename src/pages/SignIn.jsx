import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from '../firebase';

const SignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const RegExpUsernotFound = /user-not-found/g;
    const RegExpWrongPassword = /wrong-password/g;
    const RegExpNetworkRequestFailed = /network-request-failed/g;
    const RegExpInvalidEmail = /invalid-email/g;
    const RegExpInternalError = /internal-error/g;
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        await signInWithEmailAndPassword(auth, email.value, password.value).then(()=>{
            navigate('/');
        }).catch((e)=>{
            let error_message = "";
            if (RegExpWrongPassword.test(e.message)) {
                error_message = "パスワードが間違っています";
            } else if (RegExpUsernotFound.test(e.message)) {
                error_message = "ユーザーが存在しません";
            } else if (RegExpNetworkRequestFailed.test(e.message)) {
                error_message = "ネットワークが不安定です";
            } else if (RegExpInvalidEmail.test(e.message)) {
                error_message = "メールアドレスが間違っています";
            } else if (RegExpInternalError.test(e.message)) {
                error_message = "パスワードを入力してください";
            } else {
                error_message = e.message;
            }
            setError(error_message);
        });
    };

    return (
        <div>
            <h1>ログイン</h1>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input name="email" type="email" placeholder="email" />
                </div>
                <div>
                    <label>パスワード</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <button>ログイン</button>
                </div>
                <div>
                    ユーザ登録は<Link to={'/signup'}>こちら</Link>から
                </div>
            </form>
        </div>
    );
};

export default SignIn;
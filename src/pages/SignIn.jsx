import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from '../firebase';
import accountImage from '../images/accountImage.png';

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

    const body = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center" 
    };
    const name = {
        color: "#1A4F83",
        fontSize: "20px"
    };
    const box = {
        border: "solid 1px rgba(26, 79, 131, .5)",
        borderRadius: "3px",
        width: "250px",
        height: "30px",
        marginBottom: "5px"
    };
    const button = {
        fontSize: "12px",
        fontWeight: "bold",
        color: "white",
        border: "none",
        borderRadius: "3px",
        width: "255px",
        height: "35px",
        marginTop: "20px",
        background: "#43CBC3"
    };
    const content = {
        fontSize: "12px",
        color: "#43CBC3",
        marginTop: "30px",
    }

    return (
        <div style={{marginTop: "100px"}}>
            {error && <p style={{color:"red"}}>{error}</p>}
            <div style={body}>
                <img src={accountImage} />
                <p style={name}>sapori</p>
                <form style={body} onSubmit={handleSubmit}>
                    <input style={box} name="email" type="email" placeholder="メールアドレス" />
                    <input style={box} name="password" type="password" placeholder="パスワード" />
                    <button style={button} >ログイン</button>
                </form>
                <Link style={content} to={'/resetpassword'}>パスワードを忘れた場合</Link>
                <div style={content}>
                    ユーザ登録は<Link style={content} to={'/signup'}>こちら</Link>から
                </div>
            </div>
        </div>
    );
};

export default SignIn;
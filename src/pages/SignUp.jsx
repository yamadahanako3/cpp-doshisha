import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirstHeader } from '../molecules/index';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const RegExpInvalidEmail = /invalid-email/g;
    const RegExpNetworkRequestFailed = /network-request-failed/g;
    const RegExpInternalError = /internal-error/g;
    const RegExpWeakPassword = /weak-password/g;
    const RegExpEmailAlreadyInUse = /email-already-in-use/g;
    const height = window.innerHeight + "px";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.currentTarget.elements;

        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value).then(()=>{
                sendEmailVerification(auth.currentUser);
                navigate('/sendingmail', { state: { title: '認証用メールを送信しました' } });
            }).catch((e)=>{
                console.log(e.message);
                let error_message = "";
                if (RegExpInvalidEmail.test(e.message)) {
                    error_message = "メールアドレスを入力してください";
                } else if (RegExpNetworkRequestFailed.test(e.message)) {
                    error_message = "ネットワークが不安定です";
                } else if (RegExpInternalError.test(e.message)) {
                    error_message = "パスワードを入力してください";
                } else if (RegExpWeakPassword.test(e.message)) {
                    error_message = "パスワードは６文字以上に設定してください";
                } else if (RegExpEmailAlreadyInUse.test(e.message)) {
                    error_message = "このメールアドレスは既に使用されています";
                } else {
                    error_message = e.message;
                };
                    setError(error_message);
                });
        } catch (error) {
            console.log(error.message);
        };
    };

    const title = {
        margin: "30px 50px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "25px"
    };
    const form = {
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const label = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "13px"
    };
    const userInfo = {
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const input = {
        width: "260px",
        border: "none",
        borderBottom: "1px solid rgba(26, 79, 131, .5)"
    };
    const button = {
        marginTop: "10px",
        color: "white",
        padding: "8px 100px",
        backgroundColor: "#43CBC3",
        border: "none",
        borderRadius: "20px",
        fontSize: "15px"
    };

    return(
        <div>
            <FirstHeader />
            <div>
                {error && <p style={{color:"red",marginLeft:"50px"}}>{error}</p>}
                <form style={form} onSubmit={handleSubmit}>
                    <div style={title}>ユーザー登録</div>
                    <div style={userInfo}>
                        <div style={{marginBottom: "13px"}}>
                            <div style={label}>メールアドレス</div>
                            <input style={input} name="email" type="email"></input>
                        </div>
                        <div style={{marginBottom: "13px"}}>
                            <div style={label}>パスワード</div>
                            <input style={input} name="password" type="password"></input>
                        </div>
                    </div>
                    <button style={button}>次へ</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
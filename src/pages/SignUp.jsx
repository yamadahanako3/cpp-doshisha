import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../molecules/index';

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
            setError('ユーザー名を入力してください');
            return;
        };
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
                })
        } catch (error) {
            console.log(error.message);
        };
    };

    const title = {
        margin: "0 50px",
        color: "rgba(26, 79, 131, .75)",
        fontSize: "22px"
    };
    const form = {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const schoolInfo = {
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const label = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "10px"
    };
    const pullDown = {
        textAlign: "center",
        width: "80px",
        height: "30px"
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
        padding: "10px 100px",
        backgroundColor: "#43CBC3",
        border: "none",
        borderRadius: "20px"
    };

    return(
        <div>
            <Header />
            <div>
                {error && <p style={{color:"red",marginLeft:"50px"}}>{error}</p>}
                <form style={form} onSubmit={handleSubmit}>
                    <div style={title}>ユーザー登録</div>
                    <div style={schoolInfo}>
                        <div style={{margin:"0 5px"}}>
                            <div style={label}>学年</div>
                            <select style={pullDown} name="prefecture">
                                <option></option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div style={{margin:"0 5px"}}>
                            <div style={label}>組</div>
                            <select style={pullDown} name="prefecture">
                                <option></option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div style={{margin:"0 5px"}}>
                            <div style={label}>番号</div>
                            <select style={pullDown} name="prefecture">
                                <option></option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div style={userInfo}>
                        <div style={{marginBottom: "13px"}}>
                            <div style={label}>氏名</div>
                            <input style={input} name="name" type="text"></input>
                        </div>
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
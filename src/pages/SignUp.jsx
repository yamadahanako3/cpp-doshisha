import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password } = event.currentTarget.elements;
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div>
            <h1>SignUp</h1>
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
                    <p>{error}</p>
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
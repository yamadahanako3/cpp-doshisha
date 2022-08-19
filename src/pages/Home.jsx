import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const handleLogout = () => {
        auth.signOut();
        navigate('/signin');
    };

    if (!user) {
        return <Navigate to='/signin' />;
    } else {
        return (
            <div>
                <h1>ホーム</h1>
                <button onClick={handleLogout}>ログアウト</button>
            </div>
        );
    };
};

export default Home;
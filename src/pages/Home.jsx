import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import { Header, Footer} from '../molecules/index';
import { CreateButton, RadarChart } from '../atoms/index';

const Home = () => {
    const navigate = useNavigate();
    const userData1 = [5, 3, 3, 4, 4];
    const userData2 = [1, 3, 5, 5, 2];
    const { user } = useAuthContext();
    const body = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "70px",
    };
    const main = {
        width: "280px",
        height: "320px",
        marginBottom: "20px",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
    const mainTitle = {
        color: "#1A4F83",
        fontSize: "20px",
    };
    const sub = {
        fontSize: "10px",
        color: "#747D88",
        marginBottom: "3px",
    };

    const handleLogout = () => {
        auth.signOut();
        navigate('/signin');
    };

    if (!user) {
        return <Navigate to='/signin' />;
    } else {
        return (
            <div style={{backgroundColor:"#F4F6F9",height: "100vh"}}>
                <Header />
                <div style={body}>
                    <div style={main}>
                        <div style={mainTitle}>高校一年生</div>
                        <p style={sub}>これは例文です。これは例文です。これは例文です。</p>
                        <RadarChart data1={userData1} data2={userData2} />
                    </div>
                    <CreateButton text="目標と評価" link="/goalandevaluation" />
                    <CreateButton text="今の自分についての記録" link="/signup" />
                    <CreateButton text="これまでとこれから" link="/signup" />
                </div>  
                <button onClick={handleLogout}>ログアウト</button>
                <Footer />
            </div>
        );
    };
};

export default Home;
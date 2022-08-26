import { Header } from '../molecules/index';
import { CreateSlider, GoNextButton } from '../atoms/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../DbDoshisha.json'
import Template from '../template.json'
import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';

const lists = Template.inputability;
const ability = Data.users.id.first_grader.startingYear.ability;
const UserData = Data.users.id;

const InputAbility = () => {
    const height = window.innerHeight;
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const userDocumentRef = doc(db, 'users', user.uid);
    const body = {
        width: "100%",
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center" 
    };
    const title = {
        fontSize: "23px",
        textAlign: "left",
        marginLeft: "-30px",
        color: "rgba(26, 79, 131, .75)"
    };
    const underTitle = {
        marginTop: "3px",
        marginBottom: "30px",
        color: "#43CBC3",
        fontWeight: "bold",
        display: "inline-block",
        borderBottom: "1px solid #43CBC3"
    };
    const label = {
        marginLeft: "-10px",
        color: "rgba(26, 79, 131, .75)",
        fontWeight: "bold"
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        lists.map((list)=>{
            ability[list.key] = event.currentTarget.elements[list.key].value;
        });
        setDoc(userDocumentRef, UserData, { merge: true });
        navigate('/InputGoal');
        };
    return (
        <div style={{backgroundColor:"#F4F6F9", minHeight: height}}>
            <Header />
            <div style={body}>
                <div style={title}>自分自身を評価しよう</div>
                <p style={underTitle}>卒業までに身に付けたい力について</p>
                <div style={{marginLeft:"30px"}}>
                    <form onSubmit={handleSubmit}>
                        {
                            lists.map((list)=>
                                <div key={list.key}>
                                    <label style={label}>{list.text}</label>
                                    <CreateSlider name={list.key} color={list.color} />
                                </div>
                            )
                        }
                        <GoNextButton />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputAbility;
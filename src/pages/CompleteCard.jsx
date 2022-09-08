import React from 'react';
import { Header, GoalCard } from '../molecules/index';
import { useLocation } from 'react-router-dom';

const CompleteCard = () => {
    const location = useLocation();
    const item = location.state ? location.state.item:"";
    const ratio = location.state ? location.state.ratio:"";
    const goalContent1 = location.state ? location.state.goalContent1:"";
    const goalContent2 = location.state ? location.state.goalContent2:"";

    return (
        <div style={{minHeight: "100vh",backgroundColor: "#F4F6F9",paddingTop:"100px"}}>
            <Header />
            <div>
                <div style={{display: "flex", justifyContent: "center"}}><GoalCard item={item} goalContent1={goalContent1} goalContent2={goalContent2} ratio={ratio} /></div>
            </div>
        </div>
    );
};

export default CompleteCard;
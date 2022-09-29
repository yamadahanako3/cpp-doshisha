import React from 'react';
import { Header, GoalCard } from '../molecules/index';
import { useLocation } from 'react-router-dom';

const CompleteCard = () => {
    const location = useLocation();
    const now = location.state ? location.state.now:"";
    const span = location.state ? location.state.span:"";
    const item = location.state ? location.state.item:"";
    const ratio = location.state ? location.state.ratio:"";
    const goalContent1 = location.state ? location.state.goalContent1:"";
    const goalContent2 = location.state ? location.state.goalContent2:"";
    const color = location.state ? location.state.color:"";

    return (
        <div style={{minHeight: "100vh",backgroundColor: "#F4F6F9"}}>
            <Header />
            <div style={{paddingTop:"100px"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <GoalCard 
                        span={span} 
                        now={now} 
                        item={item} 
                        goalContent1={goalContent1} 
                        goalContent2={goalContent2} 
                        ratio={ratio} 
                        color={color} 
                    />
                </div>
            </div>
        </div>
    );
};

export default CompleteCard;
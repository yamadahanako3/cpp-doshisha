import React from 'react';
import { Header, Footer, GoalCard } from '../molecules/index';
import { CreateButton } from '../atoms/index';

const GoalAndEvaluation = () => {
    const title = {
        fontSize: "23px",
        color: "rgba(26, 79, 131, 1)"
    }
    const buttons = {
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={{height: "100vh", backgroundColor: "#F4F6F9"}}>
            <Header />
            <div style={{marginLeft: "calc(50% - 140px)"}}>

            <div style={title}>目標と評価</div>
            <GoalCard />
            </div>
            <Footer />
            <div style={buttons}>

                <CreateButton text="目標カレンダー" link="/signin" />
            </div>
        </div>
    );
};

export default GoalAndEvaluation;
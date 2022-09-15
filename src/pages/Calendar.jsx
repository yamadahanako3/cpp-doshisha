import React from 'react';
import { Header } from '../molecules/index';
import { GoalCalender } from '../atoms/index';

const Calendar = () => {
    const title = {
        color: "rgba(26, 79, 131, .75)",
        fontSize: "23px",
    }

    return (
        <div style={{minHeight: "100vh",backgroundColor: "#F4F6F9"}}>
            <Header />
            <div style={{paddingTop: "80px", marginLeft: "20px"}}>
                <div style={title}>カレンダー</div>
            </div>
            <div  style={{justifyContent: "center", alignItems: "center", display: "flex", marginTop: "30px"}}>
                <GoalCalender/>
            </div>
        </div>
    );
};

export default Calendar;
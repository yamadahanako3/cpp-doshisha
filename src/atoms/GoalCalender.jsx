import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./css/calender.css";

function GoalCalender() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar 
        onChange={onChange} 
        value={value} 
        locale="en-US"
        />
    </div>
  );
}

export default GoalCalender
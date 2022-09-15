import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAuthContext } from '../context/Authcontext';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import "./css/calender.css";
import json from '../template.json'


const GoalCalender = () => {
  const [value, onChange] = useState(new Date());
  const [color, setColor] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const { user } = useAuthContext();
  const [userData, setData] = useState(null);
  const userDocumentRef = doc(db, 'users', user.uid);

  useEffect(()=>{
      getDoc(userDocumentRef).then((ref)=>{
          const data = ref.data();
          const parent = data.goalCard;
          let dict = {}
          for (let i in parent) {
            dict[parent[i].span] = {color:parent[i].color,text:parent[i].item}
          }
          setData(dict)
      });
  },[]);

  const colors = json.color

  const getFormatDate = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  const getTileContent = ({date, view}) => {
    if (view !== 'month') return null;
    if (!userData) return
    const day = getFormatDate(date)
    return (userData[day]) ? colors[userData[day]?.color]: '' 
  }
  const handleClick = (event) => {
    onChange(event)
    for (let data in userData) {
      if (data == getFormatDate(event)) {
        setColor(userData[data].color)
        setText(userData[data].text)
        setDate("~"+data.replace("-","/").replace("-","/"))
        return
      } 
    }
    setColor('')
    setText('')
    setDate('')
  }

  return (
    <div>
      {
        userData?(
          <div>
            <Calendar 
              onChange={handleClick}
              value={value} 
              tileClassName={getTileContent}
              locale="en-US"
              />
            <div style={{backgroundColor:color,width:280,height:100}}>
              <p style={{color:"white", margin:0, paddingLeft:20, paddingTop:25}}>{text}</p>
              <p style={{color:"white", margin:0, paddingLeft:40, paddingTop:10, fontSize:12}}>{date}</p>
            </div> 
          </div>
          ):(
          <></>
        )
      }
    </div>
  );
}

export default GoalCalender
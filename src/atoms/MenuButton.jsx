import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import arrow from './../images/menuArrow.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const menuDiv = {
  position: "absolute",
  width: "25.5px",
  height: "12px",
  boxSizing: "border-box",
  float: "right",
  zIndex: 12
};
const menusSpan1 = {
  display: "block",
  width: "25.5px",
  height: "3.5px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
};
const menusSpan1open = {
  display: "block",
  width: "25.5px",
  height: "3.5px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
  top:"5px",
  transform:"rotate(45deg)"
};
const menusSpan2 = {
  display: "block",
  width: "25.5px",
  height: "3.5px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  top: "6px",
  backgroundColor: "rgba(26, 79, 131, .75)",
};
const menusSpan2Open = {
  opacity: "0"
};
const menusSpan3 = {
  display: "block",
  width: "25.5px",
  height: "3.5px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  top: "12px",
  backgroundColor: "rgba(26, 79, 131, .75)",
};
const menusSpan3Open = {
  display: "block",
  width: "25.5px",
  background: "#444",
  height: "3.5px",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
  top:"5px",
  transform:"rotate(-45deg)"
};
const arrowUp = {
  marginLeft: "10px",
  width:17,
  height:10,
  transition: "all 0.5s ease",
  transform:"rotate(180deg)"
};
const arrowDown = {
  marginLeft: "10px",
  width:17,
  height:10,
  transition: "all 0.5s ease",
};
const listStyleClose = {
  listStyleType:"none",
  display:"none"
};
const listStyleOpen = {
  listStyleType:"none",
  display:"block"
};
const ulStyle = {
  listStyleType: "none",
  fontSize: "17px",
  color: "rgba(26, 79, 131, .75)",
};

const MenuButton = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [arrowStyle, setArrowStyle] = useState(arrowDown);
  const [listStyle, setListStyle] = useState(listStyleClose);
  const [arrowIsOpen, setArroIsOpen] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    };
    handleSubmit();
    setState({ ...state, [anchor]: open });
  };

  const onClick = () => {
    if (arrowIsOpen) {
      setArroIsOpen(false)
      setArrowStyle(arrowUp)
      setListStyle(listStyleOpen)
    } else {
      setArroIsOpen(true)
      setArrowStyle(arrowDown)
      setListStyle(listStyleClose)
    };
  };

  const handleLogout = () => {
    auth.signOut();
    navigate('/signin');
  };

  const list = () => (
    <div>
      <ul style={ulStyle}>
        <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/home')}}>ホーム</li>
        <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/abilitychart')}}>能力チャート</li>
        <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/goal')}}>目標カード</li>
        <li style={{margin: "20px 10px"}}>自分記録<img src={arrow} alt="" style={arrowStyle} onClick={onClick}></img>
          <ul style={listStyle}>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/recordnow')}}>高校1年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/home')}}>高校2年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/home')}}>高校3年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/yearinreview')}}>これまでを振り返る</li>
          </ul>
        </li>
        <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/aboutcareerpassport')}}>saporiについて</li>
        <li style={{margin: "20px 10px"}} onClick={handleLogout}>ログアウト</li>
      </ul>
    </div>
  );
  
  const [open, setOpen] = useState(true);
  const [buttonStyle1, setButtonStyle1] = useState(menusSpan1);
  const [buttonStyle2, setButtonStyle2] = useState(menusSpan2);
  const [buttonStyle3, setButtonStyle3] = useState(menusSpan3);

  const handleSubmit = () => {
    if (open) {
      setOpen(false)
      setButtonStyle1(menusSpan1open)
      setButtonStyle2(menusSpan2Open)
      setButtonStyle3(menusSpan3Open)
    } else {
      setOpen(true)
      setButtonStyle1(menusSpan1)
      setButtonStyle2(menusSpan2)
      setButtonStyle3(menusSpan3)
    };
  };

  return (
    <div style={{display: "fixed",top: "10px",left: "10px"}}>      
      <div onClick={toggleDrawer('top', open)} style={menuDiv}>
        <span style={buttonStyle1}></span>
        <span style={buttonStyle2}></span>
        <span style={buttonStyle3}></span>
      </div>
      <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', open)}
        style={{zIndex:"11"}}
      >
      {list('top')}
      </Drawer>
    </div>
  );
};

export default MenuButton;
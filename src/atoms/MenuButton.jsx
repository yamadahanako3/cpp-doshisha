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
  zIndex: 15,

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
  transform:"rotate(45deg)",
  zIndex: 15,
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
  position: "absolute",
  right: "15px",
  width:17,
  height:10,
  transition: "all 0.3s ease",
  transform:"rotate(180deg)"
};
const arrowDown = {
  position: "absolute",
  right: "15px",
  width:17,
  height:10,
  transition: "all 0.3s ease",
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
  const [arrowStyle2, setArrowStyle2] = useState(arrowDown);
  const [listStyle2, setListStyle2] = useState(listStyleClose);
  const [arrowIsOpen2, setArroIsOpen2] = useState(true);
  const [arrowStyle1, setArrowStyle1] = useState(arrowDown);
  const [listStyle1, setListStyle1] = useState(listStyleClose);
  const [arrowIsOpen1, setArroIsOpen1] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    };
    handleSubmit();
    setState({ ...state, [anchor]: open });
  };

  const onClick1 = () => {
    if (arrowIsOpen1) {
      setArroIsOpen1(false)
      setArrowStyle1(arrowUp)
      setListStyle1(listStyleOpen)
    } else {
      setArroIsOpen1(true)
      setArrowStyle1(arrowDown)
      setListStyle1(listStyleClose)
    };
  };
  const onClick2 = () => {
    if (arrowIsOpen2) {
      setArroIsOpen2(false)
      setArrowStyle2(arrowUp)
      setListStyle2(listStyleOpen)
    } else {
      setArroIsOpen2(true)
      setArrowStyle2(arrowDown)
      setListStyle2(listStyleClose)
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
        <li style={{margin: "20px 10px"}} onClick={onClick1}>能力チャート<img src={arrow} alt="" style={arrowStyle1}></img>
          <ul style={listStyle1}>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/abilitychart',{state:{grade:1}})}}>高校1年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/abilitychart',{state:{grade:2}})}}>高校2年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/abilitychart',{state:{grade:3}})}}>高校3年生</li>
          </ul>
        </li>
        <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/goal')}}>目標カード</li>
        <li style={{margin: "20px 10px"}} onClick={onClick2}>自分記録<img src={arrow} alt="" style={arrowStyle2}></img>
          <ul style={listStyle2}>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/recordnow',{state:{grade:1}})}}>高校1年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/recordnow',{state:{grade:2}})}}>高校2年生</li>
            <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/recordnow',{state:{grade:3}})}}>高校3年生</li>
            {/* <li style={{margin: "20px 10px"}} onClick={()=>{navigate('/yearinreview')}}>これまでを振り返る</li> */}
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
      {/* <div onClick={toggleDrawer('top', open)} style={menuDiv}>
        <span style={buttonStyle1}></span>
        <span style={buttonStyle2}></span>
        <span style={buttonStyle3}></span>
      </div> */}
      <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', open)}
        style={{zIndex:"1"}}
      >
        
      {list('top')}
      </Drawer>
      <div onClick={toggleDrawer('top', open)} style={menuDiv}>
        <span style={buttonStyle1}></span>
        <span style={buttonStyle2}></span>
        <span style={buttonStyle3}></span>
      </div>
    </div>
  );
};

export default MenuButton;
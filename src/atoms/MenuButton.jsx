import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import arrow from './../images/menuArrow.png';

const menuDiv = {
  position: "relative",
  width: "25.5px",
  height: "12px",
  boxSizing: "border-box",
  float:"right",
  zIndex:12
}
const menusSpan1 = {
  display: "block",
  width: "25.5px",
  height: "2px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
}
const menusSpan1open = {
  display: "block",
  width: "25.5px",
  height: "2px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
  top:"5px",
  transform:"rotate(45deg)"
}
const menusSpan2 = {
  display: "block",
  width: "25.5px",
  height: "2px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  top: "5px",
  backgroundColor: "rgba(26, 79, 131, .75)",
}
const menusSpan2Open = {
  opacity: "0"
}
const menusSpan3 = {
  display: "block",
  width: "25.5px",
  height: "2px",
  background: "#444",
  position: "absolute",
  transition: "all 0.5s ease",
  top: "10px",
  backgroundColor: "rgba(26, 79, 131, .75)",
}
const menusSpan3Open = {
  display: "block",
  width: "25.5px",
  background: "#444",
  height: "2px",
  position: "absolute",
  transition: "all 0.5s ease",
  backgroundColor: "rgba(26, 79, 131, .75)",
  top:"5px",
  transform:"rotate(-45deg)"
}
const arrowUp = {
  width:17,
  height:10,
  transition: "all 0.5s ease",
  transform:"rotate(180deg)"
}
const arrowDown = {
  width:17,
  height:10,
  transition: "all 0.5s ease",
}
const listStyleClose = {
  listStyleType:"none",
  display:"none"
}
const listStyleOpen = {
  listStyleType:"none",
  display:"block"
}

const MenuButton = () => {
  const [state, setState] = useState(false);
  const [arrowStyle, setArrowStyle] = useState(arrowDown);
  const [listStyle, setListStyle] = useState(listStyleClose);
  const [arrowIsOpen, setArroIsOpen] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    handleSubmit()
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
    }
  }

  const list = () => (
    <div>
      <ul style={{listStyleType:"none"}}>
        <li>ホーム</li>
        <li>入力する<img src={arrow} alt="" style={arrowStyle} onClick={onClick}></img>
          <ul style={listStyle}>
            <li>目標を立てる</li>
            <li>自分を評価する</li>
            <li>これまでを振り返る</li>
            <li>今の自分を記録する</li>
            <li>将来を考える</li>
          </ul>
        </li>
        <li>目標と評価</li>
        <li>今の自分と記録</li>
        <li>これまでとこれから</li>
        <li>ログアウト</li>
      </ul>
    </div>
  );
  
  const [open, setOpen] = useState(true)
  const [buttonStyle1, setButtonStyle1] = useState(menusSpan1)
  const [buttonStyle2, setButtonStyle2] = useState(menusSpan2)
  const [buttonStyle3, setButtonStyle3] = useState(menusSpan3)

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
    }
  }

  return (
    <div>      
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
}

export default MenuButton
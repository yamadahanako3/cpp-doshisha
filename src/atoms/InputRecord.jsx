import { useState } from 'react';

const InputRecord = (props) => {
  const [text1, setText1] = useState(props.effortText);
  const [text2, setText2] = useState(props.reflectionText);
  const handleChange1 = (e) => {
    setText1(e.target.value);
  };
  const handleChange2 = (e) => {
    setText2(e.target.value);
  };
  const label = {
    color: "#1A4F83",
    fontSize: "15px",
    fontWeight: "bold",
  };
  const box1 = {
    width: "300px",
    height: "55px",
    border: "1px solid rgba(26, 79, 131, .25)",
    borderRadius: "5px",
    marginTop: "10px"
  };
  const box2 = {
    width: "150px",
    height: "25px",
    border: "1px solid rgba(26, 79, 131, .25)",
    borderRadius: "5px",
    marginLeft: "100px"
  }


  if (props.item) {
    return (
      <div style={{marginTop: "30px"}}>
        <div style={{display: "flex",alignItems: "center"}}>
          <div style={label}>{props.title}</div>
          <input style={box2} type="text" name={props.item} value={text1} onChange={handleChange1}/><br></br>
        </div>
        <input style={box1} type="text" name={props.name} placeholder={props.ph} value={text2} onChange={handleChange2}/>
      </div>
    );
  } else {
    return (
      <div style={{marginTop: "30px"}}>
        <div style={label}>{props.title}</div>
        <input style={box1} type="text" name={props.name} placeholder={props.ph} value={text1} onChange={handleChange1}/>
      </div>
    );
  }
};

export default InputRecord;
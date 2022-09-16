import { useState } from 'react';
import Template from '../template.json';
const lists = Template.recordmyself;


const InputRecord = (props) => {
  const [sentence1, setSentence1] = useState(props.sentence1);
  const [sentence2, setSentence2] = useState(props.sentence2);
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
          <input style={box2} type="text" name={props.item} value={sentence1} onChange={(e)=>setSentence1(e.target.value)}/><br></br>
        </div>
        <input style={box1} type="text" name={props.name} placeholder={props.ph} value={sentence2} onChange={(e)=>setSentence2(e.target.value)}/>
      </div>
    );
  } else {
    return (
      <div style={{marginTop: "30px"}}>
        <div style={label}>{props.title}</div>
        <input style={box1} type="text" name={props.name} placeholder={props.ph} value={sentence2} onChange={(e)=>setSentence2(e.target.value)}/>
      </div>
    );
  }
};

export default InputRecord;
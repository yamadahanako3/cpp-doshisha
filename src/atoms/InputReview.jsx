import { useState } from 'react';

const InputReview = (props) => {
  const [text1, setText1] = useState(props.effortText);
  const [text2, setText2] = useState(props.reflectionText);
  const handleChange1 = (e) => {
    setText1(e.target.value);
  };
  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const body = {
    position: "relative",
    margin: "30px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const label = {
    position: "absolute",
    left: 0,
    color: "#1A4F83",
    fontSize: "15px",
    fontWeight: "bold",
  };
  const box1 = {
    width: "300px",
    height: "55px",
    border: "1px solid rgba(26, 79, 131, .25)",
    borderRadius: "5px",
    marginTop: "30px"
  }
  const box2 = {
    width: "300px",
    height: "55px",
    border: "1px solid rgba(26, 79, 131, .25)",
    borderRadius: "5px",
  }

  return (
    <div style={body}>
      <div style={label}>{props.title}</div>
      <input style={box1} type="text" name={props.effort} placeholder="努力したこと・評価できること" value={text1} onChange={handleChange1}/><br></br>
      <input style={box2} type="text" name={props.reflection} placeholder="不十分だったこと・反省すべきこと" value={text2} onChange={handleChange2}/>
    </div>
  );
};

export default InputReview;
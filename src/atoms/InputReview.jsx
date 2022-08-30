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
  return (
    <div>
      <label>{props.title}</label>
      <input type="text" name={props.effort} placeholder="努力したこと・評価できること" value={text1} onChange={handleChange1}/><br></br>
      <input type="text" name={props.reflection} placeholder="不十分だったこと・反省すべきこと" value={text2} onChange={handleChange2}/>
    </div>
  );
};

export default InputReview;
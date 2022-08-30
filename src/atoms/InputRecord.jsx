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
  if (props.item) {
    return (
      <div>
        <label>{props.title}</label>
        <input type="text" name={props.item} value={text1} onChange={handleChange1}/><br></br>
        <input type="text" name={props.name} placeholder={props.ph} value={text2} onChange={handleChange2}/>
      </div>
    );
  } else {
    return (
      <div>
        <label>{props.title}</label>
        <input type="text" name={props.name} placeholder={props.ph} value={text1} onChange={handleChange1}/>
      </div>
    );
  }
};

export default InputRecord;
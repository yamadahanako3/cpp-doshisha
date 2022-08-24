import React from 'react';

function CreateRadarCharts(props) {
  //下から反時計回り
  const userData1 = props.data1;
  const userData2 = props.data2;

  const createLabel = (data) => {
    const top = [];
    const left = [];
    const styles = [];

    for (let i in data) {
      top[i] = 100 - (80*Math.cos(((Math.PI)*i*2)/(data.length))) + 'px';        
    };
    for (let i in data) {
      left[i] = 60 + (85*Math.sin(((Math.PI)*i*2)/(data.length))) + 'px';
    };  
    for (let i in data) {
      styles[i] = {
        position: 'absolute',
        top: top[i],
        left: left[i],
        color: '#747D88',
        fontSize: "12px",
        key:i
      }
    };

    return (
      <div>
        {
          styles.map((style)=>
            <div style={style} key={style.key}>能力</div>
          )
        }
      </div>
    );
  };

  const createAxis = (data) => {
      const top = [];
      const left = [];
      const angle = [];
      const styles = [];
      
      for (let i in data) {
        top[i] = 70-((70/2)*Math.cos(((Math.PI)*i*2)/(data.length))) + 'px';        
      };
      for (let i in data) {
        left[i] = 70+((70/2)*Math.sin(((Math.PI)*i*2)/(data.length))) + 'px';
      };
      for (let i in data) {
        angle[i] = 'rotate(' + (360/data.length)*i + 'deg)';
      };
      for (let i in data) {
        styles[i] = {
          position: 'absolute',
          top: top[i],
          left: left[i],
          width: '1px',
          height: '70px',
          backgroundColor: '#747D88',
          transform: angle[i],
          key:i
        };
      };
      
      return (
        <div>
          {
            styles.map((style)=>
              <div style={style} key={style.key}></div>
            )
          }
        </div>
      );
  };

  const createChart = (data, color) => {
    const length = 60;
    const locationX = [];
    const locationY = [];
    let polygon = '';

    for (let i in data) {
      locationX[i] = 70 + ((length/5)*data[i])*Math.sin(((Math.PI)*i*2)/(data.length)) + 'px';
    };
    for (let i in data) {
      locationY[i] = (70*3/2) + ((length/5)*data[i])*Math.cos(((Math.PI)*i*2)/(data.length)) + 'px';
    };
    for (let i in data) {
      if (i == (data.length-1)) {
        polygon += locationX[i] + ' ' + locationY[i];
      } else {
        polygon += locationX[i] + ' ' + locationY[i] + ',';
      }
    };

    const style = {
      position: 'absolute',
      marginLeft: "0 auto",
      width: "180px",
      height: "180px",
      background: color,
      clipPath: 'polygon('+ polygon + ')',
    };
    
    return (
      <div style={style}></div>
    );
  };

  const label = {
    marginTop: "30px",
    position: "relative",
    display: "flex",
    fontSize: "13px",
    color: "#747D88"
  };
  const label1 = {
    position: "absolute",
    left: "50px",
    display: "flex",
    alignItems: "center",
  };
  const label2 = {
    position: "absolute",
    right: "50px",
    display: "flex",
    alignItems: "center",
  };
  const labelColor1 = {
    width: "20px",
    height: "10px",
    margin: "5px",
    backgroundColor: "rgba(67, 203, 195,.2)",
    borderRadius: "5px",
  };
  const labelColor2 = {
    width: "20px",
    height: "10px",
    margin: "5px",
    backgroundColor: "rgba(255,174,128,.4)",
    borderRadius: "5px",
  };

  return (
    <div>
        <div style={{width: "180px",height: "180px",marginLeft: "38px",position:"relative"}}>
          <div>{createAxis(userData1)}</div>
          <div>{createLabel(userData1)}</div>
          <div>{createChart(userData1,'rgba(67, 203, 195,.2)')}</div>
          <div>{createChart(userData2,'rgba(255,174,128,.4)')}</div>
        </div>
        <div style={label}>
          <div style={label1}><div style={labelColor1}></div>4月</div>
          <div style={label2}><div style={labelColor2}></div>7月</div>
        </div>
    </div>
  );
}

export default CreateRadarCharts;
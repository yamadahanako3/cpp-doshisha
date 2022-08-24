import React from 'react';

function CreateRadarCharts() {
  //下から反時計回り
  const userData1 = [5, 3, 3, 4, 4, 4];
  const userData2 = [2, 2, 2, 2, 2, 2];

  const createLabel = (data) => {
    const top = [];
    const left = [];
    const styles = [];

    for (let i in data) {
      top[i] = 150 - (130*Math.cos(((Math.PI)*i*2)/(data.length))) + 'px';        
    };
    for (let i in data) {
      left[i] = 88 + (130*Math.sin(((Math.PI)*i*2)/(data.length))) + 'px';
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
        top[i] = 100-((100/2)*Math.cos(((Math.PI)*i*2)/(data.length))) + 'px';        
      };
      for (let i in data) {
        left[i] = 100+((100/2)*Math.sin(((Math.PI)*i*2)/(data.length))) + 'px';
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
          height: '100px',
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
    const length = 90;
    const locationX = [];
    const locationY = [];
    let polygon = '';

    for (let i in data) {
      locationX[i] = 100 + ((length/5)*data[i])*Math.sin(((Math.PI)*i*2)/(data.length)) + 'px';
    };
    for (let i in data) {
      locationY[i] = (100*3/2) + ((length/5)*data[i])*Math.cos(((Math.PI)*i*2)/(data.length)) + 'px';
    };
    for (let i in data) {
      if (i === (data.length-1)) {
        polygon += locationX[i] + ' ' + locationY[i];
      } else {
        polygon += locationX[i] + ' ' + locationY[i] + ',';
      }
    };

    const style = {
      position: 'absolute',
      margin: "0 auto",
      width: "250px",
      height: "250px",
      background: color,
      clipPath: 'polygon('+ polygon + ')',
    };
    
    return (
      <div style={style}></div>
    );
  };

  return (
    <div style={{marginLeft:'100px'}}>
        <div style={{width: '250px',height: '200px',position:'relative'}}>

          <div>{createAxis(userData1)}</div>
          <div>{createLabel(userData1)}</div>
          <div>{createChart(userData1,'rgba(67, 203, 195,.2)')}</div>
          <div>{createChart(userData2,'rgba(255,174,128,.4)')}</div>
         
        </div>
    </div>
  );
}

export default CreateRadarCharts;
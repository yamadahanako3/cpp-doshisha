import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = (props) => {
  const data = {
    labels: [
      "同志社香里生としての力",
      ["人間関係形成","社会形成能力"],
      ["　キャリア","プランニング"],
      "課題対応能力",
      ["自己理解　","自己管理能力"],
    ],
    datasets: [{
      label: "4月",
      data: props.data1,
      fill: false,
      borderColor: "rgba(67, 203, 195)",
      borderWidth:3,
      pointRadius: 0,
    }, {
      label: "3月",
      data: props.data2,
      fill: false,
      borderColor: "rgb(255,174,128)",
      borderWidth:3,
      pointRadius: 0
    }, ]
  };
  const option = {
    plugins:{
      legend:{
        position:"bottom"
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: false,
  };

  return (
    <div style={{width:"260px", height:"240px"}}>
      <Radar data={data} options={option} width={260} height={240} />
      <button onClick={()=>{props.setAbility(0)}} style={{position: "absolute",top: "80px",left: "127.5px",width: "120px",opacity:0}}>a</button>
      <button onClick={()=>{props.setAbility(1)}} style={{position: "absolute",top: "120px",left: "255px",width: "67px",height: "30px",opacity:0}}>b</button>
      <button onClick={()=>{props.setAbility(2)}} style={{position: "absolute",top: "228px",left: "228px",width: "63px", height: "30px",opacity:0}}>c</button>
      <button onClick={()=>{props.setAbility(3)}} style={{position: "absolute",top: "228px",left: "80px",width: "68px",opacity:0}}>d</button>
      <button onClick={()=>{props.setAbility(4)}} style={{position: "absolute",top: "120px",width: "63px",height: "30px",opacity:0}}>e</button>
    </div>
  );
}

export default RadarChart
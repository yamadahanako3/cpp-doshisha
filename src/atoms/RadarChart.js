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
      "同志社国際生としての力",
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
      label: "7月",
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
  }
  
  return (
    <div style={{width:"260px", height:"240px"}}>
      <Radar data={data} options={option} width={260} height={240} />
    </div>
  );
}

export default RadarChart
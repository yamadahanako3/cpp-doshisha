import { Chart, registerables } from "chart.js"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

const DoughnutChart = (props) => {
  const ratio = props.ratio;
  const color = props.color;
  const graphdata = {
    datasets: [
      {
        data: ratio!=null ? [ratio, 100-ratio] : [60,40],
        backgroundColor: [color, "#DEDFE0"],
        borderWidth:0,
        cutout:23,
      },
    ],
    labels: [],
  };
  const doughnutOptions = {
    plugins:{
      legend:{
        display: false
      }
    },
    maintainAspectRatio: false,
    responsive: false,
  };

  return (
    <div>
      <div style={{
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: props.teacher ? "30px": null,
        height: props.teacher ? "30px": null,
        }}>
        <Doughnut data={graphdata} options={doughnutOptions} width={60} height={60} />
        <label
          style={{
            position: 'absolute',
            fontSize: 13,
            color:color
          }}>{ratio!=null ? ratio+"%" : "?"}</label>
      </div>
    </div>
  );
}

export default DoughnutChart;


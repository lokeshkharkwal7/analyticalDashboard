import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Include this for auto-registration

const AreaChart = ({ label,
  continous,
  testData,
  zoomStatusFun,
  height,
  width,
  px }) => {
  const labelRaw = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(labelRaw)];
  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `  ${label} vs ${continous}`,
        fill: true,
        data: testData.map((data) => data[continous]),
        backgroundColor: "rgba(54, 162, 235, 1)", // Optional: Fill color for the area beneath the line
        borderColor: "rgba(54, 162, 235, 0.2)", // Optional: Line color
        pointRadius: 5, // Optional: Radius for data point markers
        pointBackgroundColor: "#8AD0FF", // Optional: Color for data point markers
        pointBorderColor: "rgba(255, 99, 132, 1)", // Optional: Border color for data point markers
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, // Start y-axis at 0 for better visualization
          },
        },
      ],
    },
  };

  const clicked = () => {
    if (width === '40rem') {
    zoomStatusFun("AreaChart") }
    else {
      zoomStatusFun(false)
    }
  };
  return (
    <div className= {`px-${px}`} style={{ height: `${height}`  , width:  `${width}` }}>
      <h2 className="mt-4 text-secondary  ">Area Chart</h2>

      <Line data={data} options={options} />
      <button className="btn btn-primary mt-5 btn-center" onClick={clicked}>
        {width === "40rem" ? (
          <span>
            Zoom Open <i  className="fa-solid fa-magnifying-glass-plus mx-2"></i>
          </span>
        ) : (
          <span>
            Zoom Close <i  className="fa-solid fa-magnifying-glass-minus mx-2"></i>
          </span>
        )}
      </button>
    </div>
  );
};

export default AreaChart;

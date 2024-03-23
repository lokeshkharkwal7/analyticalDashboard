import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
 
function DonutChart({ label, continous, testData }) {
  const rawlabel = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(rawlabel)]; // only taking non duplicate values

  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `  ${label} vs ${continous}`,
                data: testData.map((data) => data[continous]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="mt-3" style={{ height: "40rem", width: "40rem" }}>
      <Doughnut data={data} />
    </div>
  );
}

export default DonutChart;

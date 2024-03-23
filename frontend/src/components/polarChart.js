import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Include this for auto-registration

const PolarAreaChart = ({ label, continous, testData }) => {
  const labelRaw = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(labelRaw)];
  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `${label} vs ${continous}`,
        data: testData.map((data) => data[continous]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Optional: Fill color for each slice
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Optional: Line color for each slice
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        pointRadius: 5, // Optional: Radius for data point markers (optional)
        pointBackgroundColor: "rgba(255, 255, 255, 1)", // Optional: Color for data point markers
        pointBorderColor: "rgba(255, 255, 255, 1)", // Optional: Border color for data point markers
      },
    ],
  };

  return (
    <div className="mt-3" style={{ height: "40rem", width: "40rem" }}>
      <h1 className="text-secondary mb-4">Polar Chart</h1>
      <PolarArea data={data} />
    </div>
  );
};

export default PolarAreaChart;

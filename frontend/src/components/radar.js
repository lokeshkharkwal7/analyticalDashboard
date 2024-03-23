import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Include this for auto-registration

const RadarChart = ({
  label,
  continous,
  testData,
  zoomStatusFun,
  height,
  width,
  px,
}) => {
  const labelRaw = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(labelRaw)];
  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `${label} vs ${continous}`,
        data: testData.map((data) => data[continous]),
        backgroundColor: "#8AD0FF", // Optional: Fill color for the area beneath the line
        borderColor: "rgba(54, 162, 235, 0.2)", // Optional: Line color
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Optional: Point color
        pointBorderColor: "rgba(54, 162, 235, 0.2)", // Optional: Point border color
        pointBorderWidth: 1, // Optional: Point border width (in pixels)
        pointRadius: 5, // Optional: Point radius (in pixels)
      },
    ],
  };

  const options = {
    scale: {
      pointLabels: {
        fontSize: 12, // Adjust font size for readability
      },
      angleLines: {
        display: true, // Show angle lines for better readability
      },
      ticks: {
        suggestedMin: 0, // Set minimum suggested tick value
        suggestedMax: 100, // Set maximum suggested tick value
      },
    },
  };

  const clicked = () => {
    if (width === "40rem") {
      zoomStatusFun("RadarChart");
    } else {
      zoomStatusFun(false);
    }
  };

  return (
    <div className="mt-3 mx-3" style={{ height: "40rem", width: "40rem" }}>
      <h2 className="mt-4 text-secondary  ">Radar Chart</h2>

      <Radar data={data} options={options} />
      {/* <div className="text-center">  */}
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
      {/* </div>   */}
    </div>
  );
};

export default RadarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({
  label,
  continous,
  testData,
  zoomStatusFun,
  height,
  width,
  px,
}) {
  const rawlabel = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(rawlabel)]; // only taking non duplicate values
  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `${label} vs ${continous}`, // Customize this label as needed
        data: testData.map((data) => data[continous]), // Data points for your line
        borderColor: "rgba(54, 162, 235, 1)", // Optional: Line color
        backgroundColor: ["#8AD0FF"], // Optional: Fill color under the line
        borderWidth: 1, // Optional: Line width (in pixels)
      },
    ],
  };
  const clicked = () => {
    if (width === "40rem") {
      zoomStatusFun("BarChart");
    } else {
      zoomStatusFun(false);
    }
  };
  return (
    <div
      className={`px-${px}`}
      style={{ height: `${height}`, width: `${width}` }}
    >
      <h2 className="text-secondary ">Bar Chart</h2>
      <Bar data={data} />
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
      </button>{" "}
    </div>
    // </div>
  );
}

export default BarChart;

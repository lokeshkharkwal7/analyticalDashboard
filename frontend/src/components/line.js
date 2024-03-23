import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function MyLineChart({
  label,
  continous,
  testData,
  zoomStatusFun,
  height,
  width,
  px,
}) {
  const draw = testData.map((data) => data[label]);
  const labelTransformed = [...new Set(draw)]; // only taking non duplicate values
  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `${label} vs ${continous}`,
        data: testData.map((data) => data[continous]), // Data points for your line
        borderColor: "rgba(54, 162, 235, 1)", // Optional: Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Optional: Fill color under the line
        borderWidth: 1, // Optional: Line width (in pixels)
      },
    ],
  };
  const clicked = () => {
    if (width === "40rem") {
      zoomStatusFun("MyLineChart");
    } else {
      zoomStatusFun(false);
    }
  };
  const options = {
    // animations: {
    //   tension: {
    //     duration: 500,
    //     easing: "linear",
    //     from: 1,
    //     to: 0,
    //     loop: true,
    //   },
    // },

    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor: "#00ffff",
        titleColor: "#00008B ",
        footerColor: "#00008B",

        callbacks: {
          labelColor: function (context) {
            return {
              // borderColor: "rgb(0, 0, 255)",
              // borderWidth: 2,
              // borderDash: [2, 2],
              // borderRadius: 2,
            };
          },
          labelTextColor: function (context) {
            return "#00008B";
          },
        },
      },
    },
  };
  return (
    // <div className="mt-3 mx-5" style={{ height: "40rem", width: "40rem" }}>
    <div
      className={`px-${px}`}
      style={{ height: `${height}`, width: `${width}` }}
    >
      <h2 className="text-secondary">Line Chart</h2>

      <Line data={data} options={options} />
      {/* <div className="text-center"> */}
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
      {/* <button className="btn btn-primary mt-3 btn-center" onClick={clicked}>
          {width === "40rem" ? "Zoom Open" : "Zoom Close"}
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default MyLineChart;

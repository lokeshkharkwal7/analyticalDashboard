import React, { useEffect, useState } from "react";
import MyLineChart from "./line";
import BarChart from "./bar";
import Navbar from "./navbar";
import DonutChart from "./donut";
import InputNavbar from "./inputNavbar";
import { useDispatch, useSelector } from "react-redux";
import RadarChart from "./radar";
import PolarAreaChart from "./polarChart";
import AreaChart from "./areaChart";
import { fetchBlackCofferData } from "../projectApi/getBlackCofferDataSet";
import Loading from "./loading";

function Home() {
  const dataForGraphs = useSelector((state) => {
    return state.INPUTDATA;
  });

  const dispatch = useDispatch();

  // we are getting data in the states from the fetch api
  const [blackCofferData, setblackCofferData] = useState([]);
  // creating a copy of the data
  const [orignalData, setOriginalData] = useState([]);

  const getDataFromAPI = (data) => {
    // creating 2 copies of the api data
    setblackCofferData(data);
    setOriginalData(data);
  };

  // now changing the value as per the filter
  const reduxFilter = useSelector((state) => {
    return state.FILTERINPUTSLICER;
  });

  const [errorStatus, setErrorStatus] = useState(false);
  const applyFilter = () => {
    // Start with the original data
    setErrorStatus(true);

    let filteredData = [...orignalData];

    // Apply sector filter if it exists
    if (reduxFilter.sector.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.sector.filter] === reduxFilter.sector.name
      );
    }

    // Apply topic filter if it exists
    if (reduxFilter.topic.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.topic.filter] === reduxFilter.topic.name
      );
    }
    // Apply topic filter if it exists
    if (reduxFilter.end_year.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) =>
          data[reduxFilter.end_year.filter] === reduxFilter.end_year.name
      );
    }
    // Apply topic filter if it exists
    if (reduxFilter.region.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.region.filter] === reduxFilter.region.name
      );
    }
    // Apply topic filter if it exists
    if (reduxFilter.pestle.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.pestle.filter] === reduxFilter.pestle.name
      );
    }
    // Apply topic filter if it exists
    if (reduxFilter.source.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.source.filter] === reduxFilter.source.name
      );
    }
    // Apply topic filter if it exists
    if (reduxFilter.country.name.trim() !== "") {
      filteredData = filteredData.filter(
        (data) => data[reduxFilter.country.filter] === reduxFilter.country.name
      );
    }

    // Update the state with the filtered data
    setblackCofferData(filteredData);

    if (filteredData.length === 0 && errorStatus === true) {
      alert("No Data To Display Please Reset the Applied Filter");
    }
  };

  // const backToNormal = () => {
  //   setblackCofferData(orignalData);
  // };

  const samplebutton = (reduxFilterValues) => {
    console.log("Redux data found   : ", blackCofferData);
  };

  const [zoomStatus, setZoomStatus] = useState(false);

  const changeZoomComponent = (value) => {
    setZoomStatus(value);
  };

  useEffect(() => {
    // we are getting data in the states from the fetch api
    fetchBlackCofferData(dispatch, getDataFromAPI);
  }, []);

  // this use effect is for the filtering purpose
  useEffect(() => {
    applyFilter();
  }, [reduxFilter]);

  const clickedtestbutton = () => {
    console.log("The value of clickedTestButton is : ", zoomStatus);
  };

  return (
    <React.Fragment>
      <Navbar />
      <InputNavbar />
      {/* <button className="btn btn-primary" onClick={samplebutton}>
        test click
      </button> */}

      {blackCofferData.length === 0 ? (
        <Loading />
      ) : (
        <div className="mx-1">
          <br />

          {zoomStatus === false ? (
            <div className="container-fluid  d-flex  flex-wrap   ">
              <div
                className="card overflow-scroll mx-1 my-1                 "
                style={{ width: "40rem", height: "34rem" }}
              >
                <div className="card-body">
                  {/* <h5 className="card-title">Line Chart</h5>  */}

                  <MyLineChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    zoomStatusFun={changeZoomComponent}
                    height={"25rem"}
                    width={"40rem"}
                    px={0}
                  />
                </div>
              </div>

              <div
                className="card overflow-scroll mx-1 my-1                 "
                style={{ width: "40rem", height: "34rem" }}
              >
                <div className="card-body">
                  {/* <h5 className="card-title">Bar Chart</h5>  */}

                  <BarChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    zoomStatusFun={changeZoomComponent}
                    height={"25rem"}
                    width={"40rem"}
                    px={0}
                  />
                </div>
              </div>

              <div
                className="card overflow-scroll mx-1 my-1                 "
                style={{ width: "40rem", height: "34rem" }}
              >
                <div className="card-body">
                  {/* <h5 className="card-title">Area Chart</h5>  */}
                  <AreaChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    zoomStatusFun={changeZoomComponent}
                    height={"25rem"}
                    width={"40rem"}
                    px={0}
                  />
                </div>
              </div>

              <div
                className="card overflow-scroll mx-1 my-1                 "
                style={{ width: "40rem", height: "50rem" }}
              >
                <div className="card-body">
                  {/* <h5 className="card-title">Radar Chart</h5>  */}
                  <RadarChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    zoomStatusFun={changeZoomComponent}
                    height={"25rem"}
                    width={"40rem"}
                    px={0}
                  />
                </div>
              </div>

              {/* <DonutChart
          label={dataForGraphs.labels}
          continous={dataForGraphs.continous}
          testData={blackCofferData}
        /> */}

              {/* <PolarAreaChart
          label={dataForGraphs.labels}
          continous={dataForGraphs.continous}
          testData={blackCofferData}
        /> */}
            </div>
          ) : (
            <div className="overflow-scroll">
              {zoomStatus === "MyLineChart" && (
                <React.Fragment>
                  {/* <button className="btn-primary" onClick={clickedtestbutton}>Click</button> */}
                  <MyLineChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    height={"50rem"}
                    width={"70rem"}
                    zoomStatusFun={changeZoomComponent}
                    px={2}
                  />{" "}
                </React.Fragment>
              )}

              {zoomStatus === "RadarChart" && (
                <React.Fragment>
                  {/* <button className="btn-primary" onClick={clickedtestbutton}>Click</button> */}
                  <RadarChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    height={"50rem"}
                    width={"70rem"}
                    zoomStatusFun={changeZoomComponent}
                    px={2}
                  />{" "}
                </React.Fragment>
              )}

              {zoomStatus === "BarChart" && (
                <React.Fragment>
                  {/* <button className="btn-primary" onClick={clickedtestbutton}>Click</button> */}
                  <BarChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    height={"50rem"}
                    width={"70rem"}
                    zoomStatusFun={changeZoomComponent}
                    px={2}
                  />{" "}
                </React.Fragment>
              )}

              {zoomStatus === "AreaChart" && (
                <React.Fragment>
                  {/* <button className="btn-primary" onClick={clickedtestbutton}>Click</button> */}

                  <AreaChart
                    label={dataForGraphs.labels}
                    continous={dataForGraphs.continous}
                    testData={blackCofferData}
                    height={"50rem"}
                    width={"70rem"}
                    zoomStatusFun={changeZoomComponent}
                    px={2}
                  />
                </React.Fragment>
              )}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default Home;

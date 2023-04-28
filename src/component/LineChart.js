import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
function LineChart() {
  const [data, setData] = useState([]);

  // Fetch Function
  useEffect(() => {
    fetch("./Wine-Data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // store Data in State Data Variable
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  }, []);
  // lineChart
  const option = {
    xAxis: {
      type: "category",
      data: data.map((val) => val.Flavanoids),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map((val) => val.Ash),
        type: "line",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <>
  <h1>LineChart</h1>
      <ReactEcharts option={option} />
    </>
  );
}
export default LineChart;

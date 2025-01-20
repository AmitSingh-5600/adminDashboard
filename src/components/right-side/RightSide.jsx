import Updates from "../updates/Updates";
import "./right-side.css";
import Chart from "react-apexcharts";

let state = {
  options: {
    xaxis: {
      categories: [2019, 2020, 2021, 2022, 2023, 2024],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
  },
  series: [
    {
      data: [50, 49, 60, 70, 91, 94],
    },
  ],
};

function RightSide() {
  return (
    <div className="right-side">
      <h2>Updates</h2>
      <div className="update">
        <Updates />
      </div>
      <div className="review">
        <h2>Review</h2>
        <Chart options={state.options} series={state.series} type="area" />
      </div>
    </div>
  );
}

export default RightSide;

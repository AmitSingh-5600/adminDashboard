import { useState } from "react";
import "./card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import PropTypes from "prop-types"; //added to reove the warnign given by react.

Card.propTypes = {
  param: PropTypes.shape({
    png: PropTypes.elementType.isRequired,
    color: PropTypes.shape({
      backGround: PropTypes.string.isRequired,
      boxShadow: PropTypes.string.isRequired,
    }).isRequired,
    barValue: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      })
    ).isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

CompactCard.propTypes = {
  param: PropTypes.shape({
    png: PropTypes.elementType.isRequired,
    color: PropTypes.shape({
      backGround: PropTypes.string.isRequired,
      boxShadow: PropTypes.string.isRequired,
    }).isRequired,
    barValue: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

ExpandedCard.propTypes = {
  param: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.shape({
      backGround: PropTypes.string.isRequired,
      boxShadow: PropTypes.string.isRequired,
    }).isRequired,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

function Card(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} handleClick={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} handleClick={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
}

function CompactCard({ param, handleClick }) {
  const Png = param.png;
  return (
    <motion.div
      className="compact-card"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={handleClick}
    >
      <div className="radial-bar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue} % `}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, handleClick }) {
  const data = {
    options: {
      charts: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expanded-card"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={handleClick} />
      </div>
      <span>{param.title}</span>
      <div className="chart-container">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <p>Last 24 hours</p>
    </motion.div>
  );
}

export default Card;

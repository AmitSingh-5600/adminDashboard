/* eslint-disable react/prop-types */

import "./main-dash.css";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import { UilListUl } from "@iconscout/react-unicons";
function MainDash({ setSidebarSelected, sidebarSelected }) {
  return (
    <div className="main-dash">
      <h1 className={sidebarSelected ? "margin" : ""}>
        <span onClick={() => setSidebarSelected((x) => !x)}>
          <UilListUl />
        </span>
        Dashboard
      </h1>
      <Cards />
      <Table />
    </div>
  );
}

export default MainDash;

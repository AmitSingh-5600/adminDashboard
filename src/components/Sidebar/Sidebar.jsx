/* eslint-disable react/prop-types */

import { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import { SidebarData } from "../../assets/data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar({ sidebarSelected }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className={sidebarSelected ? "sidebar open" : "sidebar"}>
        {/* logo */}
        <div className="logo">
          <img src={logo}></img>
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  selected === index ? "menu-item active" : "menu-item"
                }
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menu-item">
            <UilSignOutAlt />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

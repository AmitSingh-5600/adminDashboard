import { useState } from "react";
import "./App.css";
import MainDash from "./components/main-dash/MainDash";
import RightSide from "./components/right-side/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let [sidebarSelected, setSidebarSelected] = useState(false);
  return (
    <div className="app">
      <div className="app-glass">
        <Sidebar sidebarSelected={sidebarSelected} />
        <MainDash
          setSidebarSelected={setSidebarSelected}
          sidebarSelected={sidebarSelected}
        />
        <RightSide />
      </div>
    </div>
  );
}

export default App;

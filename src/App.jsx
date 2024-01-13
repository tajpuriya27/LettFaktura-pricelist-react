import { useState } from "react";
import Header from "./components/Header";
import Pricelist from "./components/Pricelist";
import Sidebar from "./components/sidebar";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Pricelist />
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import InboxPage from "./Pages/InboxPage";
import TaskPage from "./Pages/TaskPage";
import { useState } from "react";
import InChating from "./Pages/InboxPage/Detail/InChating";

function App() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className=" bg-primaryGray-900 h-screen grid items-center">
      <div className="  sm:h-auto container mx-auto bg-slate-200 ">
        <div className="lg:mx-64  ">
          <div className="">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route exact path="/inbox" element={<InboxPage />} />
              <Route path="/inbox/:id" element={<InChating />} />
              <Route path="/task" element={<TaskPage />} />
            </Routes>
            <Footer toggleOpen={toggleOpen} open={open} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

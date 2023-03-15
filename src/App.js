import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import InboxPage from "./Pages/InboxPage";
import TaskPage from "./Pages/TaskPage";
import { useState } from "react";
import InChating from "./Pages/InboxPage/Detail/InChating";
import NotFoundPage from "./Components/Common/NotFoundPage";

function App() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className=" bg-primaryGray-900 h-screen grid items-center">
      <div className="  sm:h-auto  bg-slate-200 ">
        <div className="mx-4 lg:mx-64  ">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route exact path="/inbox" element={<InboxPage />} />
            <Route path="/inbox/:id" element={<InChating />} />
            <Route path="/task" element={<TaskPage />} />
          </Routes>
          <Footer toggleOpen={toggleOpen} open={open} />
        </div>
      </div>
    </div>
  );
}

export default App;

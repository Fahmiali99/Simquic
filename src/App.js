import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import InboxPage from "./Pages/InboxPage";
import TaskPage from "./Pages/TaskPage";
import { useState } from "react";
import InChating from "./Pages/InboxPage/Detail/inChating";

function App() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className=" bg-white">
      <div className="h-auto sm:h-auto container mx-auto bg-slate-200 py-20">
        <div className="lg:mx-64 border-2 rounded-lg">
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

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import InboxPage from "./Pages/InboxPage";
import TaskPage from "./Pages/TaskPage";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <div className="h-auto sm:h-auto container mx-auto bg-slate-200 py-20">
      <div className="lg:mx-64 bg-orange-100 py-6 px-8">
        <div className="bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/task" element={<TaskPage />} />
          </Routes>
          <Footer toggleOpen={toggleOpen} open={open} />
        </div>
      </div>
    </div>
  );
}

export default App;

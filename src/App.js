import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import InboxPage from "./Pages/InboxPage";
import TaskPage from "./Pages/TaskPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/inbox" element={InboxPage} />
        <Route path="/task" element={TaskPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import SelectedItem from "./Detail/SelectedItem";

function Fitur() {
  const dropdownRef = useRef(null);
  const [openFitur, setOpenFitur] = useState(false);
  const [selectedHide, setSelectedHide] = useState(null);

  function openToggle(hideId) {
    setSelectedHide(hideId);
    setOpenFitur(!openFitur);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenFitur(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);
  return (
    <div className="flex justify-between items-center">
      <div>
        <SelectedItem
          openToggle={openToggle}
          open={openFitur}
          selectedHide={selectedHide}
          dropdownRef={dropdownRef}
        />
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          New Task
        </button>
      </div>
    </div>
  );
}

export default Fitur;

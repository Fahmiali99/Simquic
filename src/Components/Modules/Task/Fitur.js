import React, { useState, useEffect, useRef } from "react";
import SelectedItem from "./Detail/SelectedItem";

function Fitur({ handleSelect, toggleOpenTask }) {
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
          handleSelect={handleSelect}
          openToggle={openToggle}
          open={openFitur}
          selectedHide={selectedHide}
          dropdownRef={dropdownRef}
        />
      </div>

      <div>
        <button
          onClick={toggleOpenTask}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          New Task
        </button>
      </div>
    </div>
  );
}

export default Fitur;

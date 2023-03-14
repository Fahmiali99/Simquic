import React, { useState } from "react";
import { AiOutlineDown, AiOutlineClockCircle } from "react-icons/ai";
import { HiDotsHorizontal, HiOutlinePencil } from "react-icons/hi";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
function TodoList({
  idx,
  name,
  body,
  date,
  toggleArrow,
  selectedHideDot,
  delet,
  toggleDelete,
  dropdownRef,
  handleCheckboxChange,
  checkedItems,
  selectedArrow,
  handleDelete,
}) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="border-b border-primaryGray-500">
      <div className="flex items-center  justify-between py-[22px] ">
        <div className="flex items-center">
          <input
            checked={checkedItems.includes(idx)}
            onChange={() => handleCheckboxChange(idx)}
            id={`checkbox-${idx}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            htmlFor={`checkbox-${idx}`}
            className="ml-5 text-ll font-bold text-gray-900 dark:text-gray-300"
            style={{
              textDecoration: checkedItems.includes(idx)
                ? "line-through"
                : "none",
              color: checkedItems.includes(idx) ? "gray" : "black",
            }}
          >
            {name}
          </label>
        </div>
        <div>
          <div className="flex items-center">
            <p
              className="pr-4 text-indicatorRed "
              style={{
                display: checkedItems.includes(idx) ? "none" : "block",
              }}
            >
              2 Days Left
            </p>
            <p className="pr-4">12/06/2021</p>
            <button key={idx} onClick={() => toggleArrow(idx)} className="pr-4">
              <AiOutlineDown />
            </button>
            <button onClick={() => toggleDelete(idx)}>
              <HiDotsHorizontal />
            </button>
            <div ref={dropdownRef}>
              {delet && selectedHideDot === idx && (
                <div className="relative">
                  <div
                    id="dropdown"
                    className=" absolute right-5 top-3 z-10 bg-white divide-y divide-gray-100 rounded-lg border w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-indicatorRed"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <button
                        onClick={() => handleDelete(idx)}
                        className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
                      >
                        <span className="flex justify-start">Delete</span>
                      </button>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedArrow.includes(idx) && (
        <div className="ml-9 mt-4 pb-4">
          <div className="flex items-center pb-2 ">
            <div>
              <AiOutlineClockCircle className="text-ll mr-2 text-primaryBlue" />
            </div>

            <div className="date-picker flex items-center relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className=" rounded-lg"
              />
              <AiOutlineCalendar className="icon absolute right-3" />
            </div>
          </div>
          <div className="flex ">
            <div>
              <HiOutlinePencil className="text-ll mr-2" />
            </div>
            <h1>{body}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;

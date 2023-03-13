import React from "react";
import { AiOutlineDown, AiOutlineClockCircle } from "react-icons/ai";
import { HiDotsHorizontal, HiOutlinePencil } from "react-icons/hi";

function TodoList({
  idx,
  name,
  body,
  hide,
  toggleArrow,
  selectedHideDot,
  selectedHideArrow,
  delet,
  toggleDelete,
  dropdownRef,
}) {
  return (
    <div>
      <div className="flex items-center  justify-between">
        <div className="">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-5 text-ll font-bold text-gray-900 dark:text-gray-300"
          >
            {name}
          </label>
        </div>
        <div className=" ">
          <div className="flex items-center">
            <p className="pr-4 text-indicatorRed ">2 Days Left</p>
            <p className="pr-4">12/06/2021</p>
            <button onClick={() => toggleArrow(idx)} className="pr-4">
              <AiOutlineDown />
            </button>
            <button onClick={() => toggleDelete(idx)}>
              <HiDotsHorizontal />
            </button>
            <div ref={dropdownRef}>
              {delet && selectedHideDot === idx && (
                <div
                  id="dropdown"
                  className="fixed z-10 bg-white divide-y divide-gray-100 rounded-lg border w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-indicatorRed"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {hide && selectedHideArrow === idx && (
        <div className="ml-9 mt-4 pb-4">
          <div className="flex items-center pb-2 ">
            <div>
              <AiOutlineClockCircle className="text-ll mr-2 text-primaryBlue" />
            </div>

            <input
              type="date"
              className="rounded-lg border-2 border-gray-400"
            />
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

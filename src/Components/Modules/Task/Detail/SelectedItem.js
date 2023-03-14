import React from "react";

function SelectedItem({ openToggle, open, dropdownRef, selectedHide }) {
  const select = [
    {
      name: "Personal Errands",
      value: "/",
    },
    {
      name: "Urgent To-Do",
      value: "/",
    },
  ];
  return (
    <div>
      <button
        onClick={openToggle}
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="  bg-white hover:bg-primaryGray-200 text-black border border-primaryGray-500 hover:primaryGray-500focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        My Tasks
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div ref={dropdownRef}>
        {open && selectedHide && (
          <div
            id="dropdownDivider"
            className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg border border-primaryGray-200 w-44 dark:bg-gray-700 dark:divide-gray-600  "
          >
            {select.map((item, idx) => (
              <div key={idx} className="py-2">
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectedItem;

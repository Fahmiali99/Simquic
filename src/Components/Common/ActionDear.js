import React from "react";
import { BsThreeDots } from "react-icons/bs";

function ActionDear({
  selectedMessageId,
  toggleOpen,
  open,
  chatIdx,
  dropdownRef,
}) {
  const action = [
    {
      name: "Share",
      href: "/",
      color: "#2F80ED",
    },
    {
      name: "Reply",
      href: "/",
      color: "#2F80ED",
    },
  ];
  return (
    <div className="pl-2">
      <button
        onClick={() => toggleOpen(chatIdx)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
      >
        <BsThreeDots />
      </button>
      <div ref={dropdownRef}>
        {open && selectedMessageId === chatIdx && (
          <div className="relative z-50">
            <div
              id="dropdown"
              className={`z-10 border  bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 absolute`}
            >
              {action.map((item, idx) => (
                <div key={idx} className="py-2">
                  <a
                    href={item.href}
                    style={{ color: item.color }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionDear;

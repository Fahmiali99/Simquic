import React, { useState } from "react";
import { fitur } from "../../Utils/fitur";
import { MdElectricBolt } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer({ toggleOpen, open }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className=" flex items-center justify-end pb-6 px-8 pt-6">
      <div className=" flex items-center ">
        {open && (
          <div
            className={`z-10   divide-y  rounded-lg   dark:bg-gray-700  ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className=" text-sm text-gray-700 dark:text-gray-200 flex">
              {fitur?.map((item, idx) => (
                <li key={idx} className=" mr-2 ">
                  <button onClick={() => setActiveItem(idx)}>
                    <NavLink
                      to={item.href}
                      className={`  rounded-full w-16 h-16 flex justify-center items-center hover:bg-white duration-200 ${
                        activeItem === idx
                          ? `${" bg-current"}`
                          : " bg-grays text-white "
                      }`}
                      style={{
                        color: `${item.color}`,
                      }}
                    >
                      {activeItem === idx ? (
                        <item.Icons className=" text-2xl text-white" />
                      ) : (
                        <item.Icons className=" text-2xl " />
                      )}
                    </NavLink>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <button
            onClick={toggleOpen}
            className=" outline-none rounded-full bg-primaryBlue hover:bg-blue-500 text-white w-16 h-16 flex justify-center items-center duration-200"
            type="button"
          >
            <MdElectricBolt className=" text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

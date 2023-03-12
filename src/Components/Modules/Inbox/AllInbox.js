import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Substring } from "../../Common/Substring";
import { Link } from "react-router-dom";

function AllInbox({ uri_id, name, email, body }) {
  return (
    <Link to={`/inbox/` + uri_id}>
      <div
        id="toast-notification"
        className="w-full my-[22px]  text-gray-900 bg-white rounded-lg dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        <div>
          <div className="flex items-center justify-between">
            <div className=" flex items-center">
              <div className="relative inline-block shrink-0 ml-[22px]">
                <div className="w-12 h-12 relative rounded-full z-50 bg-primaryBlue flex justify-center items-center text-white">
                  <AiOutlineUser className="text-2xl" />
                </div>
                <span className="absolute bottom-0 right-5 z-0 inline-flex items-center justify-center w-12 h-12 bg-primaryGray-200 rounded-full">
                  <AiOutlineUser className="text-2xl text-primaryGray-500" />
                </span>
              </div>
              <div className="ml-3 text-sm ">
                <div className="flex items-center">
                  <h1 className=" font-bold flex  dark:text-white text-ll text-primaryBlue">
                    {name}
                  </h1>
                  <h1 className="text-mm text-black ml-5">01/06/2021 12:19</h1>
                </div>
                <div className=" text-mm font-semibold">{email}</div>
                <span className=" text-ss ">{Substring(body)}</span>
              </div>
            </div>

            <span className="  w-3.5 h-3.5 bg-indicatorRed border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AllInbox;

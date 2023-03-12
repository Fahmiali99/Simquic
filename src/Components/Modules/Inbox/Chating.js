import React, { useState, useEffect, useRef } from "react";
import { message } from "../../../Utils/message";
import ActionsInbox from "../../Common/ActionsInbox";

function Chating({ postId }) {
  const [open, setOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const dropdownRef = useRef(null);

  function toggleOpen(messageId) {
    setSelectedMessageId(messageId);
    setOpen(!open);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);
  return (
    <div className=" ">
      <div className=" justify-between flex flex-col ">
        <div
          id="messages"
          className="flex flex-col space-y-4  overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          style={{ height: "400px" }}
        >
          {/* Dear */}
          <div className="chat-message">
            <div className="">
              {message.map((item) => {
                const detail = item.inbox_chat;
                return (
                  <div key={item.id}>
                    <div className=" text-center flex items-center">
                      <div className=" border-b-2 w-2/5 border-primaryGray-500" />
                      <h1 className="px-4">
                        {item.status} {item.month} {item.date}
                      </h1>
                      <div className=" border-b-2 w-2/5 border-primaryGray-500" />
                    </div>
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      {detail.slice(0, postId).map((item, idx) => (
                        <div key={idx}>
                          <span className="text-mm flex  font-bold py-2   text-gray-600">
                            {item.name}
                          </span>
                          <div className="flex">
                            <span
                              className="px-4 py-2 rounded-lg inline-block  text-black "
                              style={{ background: item.color }}
                            >
                              {item.body}
                              <p className="text-ss py-1">{item.time}</p>
                            </span>
                            <ActionsInbox
                              selectedMessageId={selectedMessageId}
                              toggleOpen={toggleOpen}
                              open={open}
                              chatIdx={idx}
                              dropdownRef={dropdownRef}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* From */}
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="text-mm flex justify-end font-bold py-2   text-gray-600">
                      You
                    </span>
                    <span className="px-4 py-2 rounded-lg inline-block bg-stikerViolet text-black ">
                      Any updates on this issue? I'm getting the same error when
                      trying to install devtools. Thanks
                      <p className="text-ss py-1">12:15</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* From */}
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span className="text-mm flex justify-end font-bold py-2   text-gray-600">
                    You
                  </span>
                  <span className="px-4 py-2 rounded-lg inline-block bg-stikerViolet text-black ">
                    Any updates on this issue? I'm getting the same error when
                    trying to install devtools. Thanks
                    <p className="text-ss py-1">12:15</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* send */}
        <div className="  pt-4 mb-2 sm:mb-0  ">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Type a new message"
              className="w-full px-4 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600  bg-gray-200 rounded-md py-3"
            />
            <div className="ml-10  items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chating;

import React, { useState, useEffect, useRef } from "react";
import { message } from "../../../Utils/message";
import DearMessage from "./Detail/DearMessage";
import FromMessage from "./Detail/FromMessage";
import Send from "./Detail/Send";

function Chating({ postId }) {
  const [open, setOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const dropdownRef = useRef(null);
  const [chating, setChating] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeNow = new Date();
    const newChating = {
      id: Date.now(),
      text: e.target[0].value,
      time: `${timeNow.getHours()}:${timeNow
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
    };
    setChating([...chating, newChating]);
    e.target[0].value = "";
  };

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
                <DearMessage
                  key={item.id}
                  detail={detail}
                  status={item.status}
                  month={item.month}
                  date={item.date}
                  postId={postId}
                  selectedMessageId={selectedMessageId}
                  toggleOpen={toggleOpen}
                  open={open}
                  dropdownRef={dropdownRef}
                />
              );
            })}
          </div>
        </div>
        {/* From */}
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                {chating.map((item) => (
                  <FromMessage
                    key={item.id}
                    idx={item.id}
                    text={item.text}
                    time={item.time}
                    selectedMessageId={selectedMessageId}
                    toggleOpen={toggleOpen}
                    open={open}
                    dropdownRef={dropdownRef}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* send */}
      <Send handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chating;

import React from "react";
import ActionFrom from "../../../Common/ActionForm";

function FromMessage({
  text,
  time,
  selectedMessageId,
  toggleOpen,
  idx,
  open,
  dropdownRef,
}) {
  return (
    <div>
      <span className="text-mm flex justify-end font-bold py-2   text-gray-600">
        You
      </span>
      <div className=" flex justify-end">
        <ActionFrom
          selectedMessageId={selectedMessageId}
          toggleOpen={toggleOpen}
          open={open}
          chatIdx={idx}
          dropdownRef={dropdownRef}
        />
        <span className="px-4 py-2  justify-end rounded-lg inline-block bg-ChatPurple-200 text-black ">
          {text}
          <p className="text-ss py-1">{time}</p>
        </span>
      </div>
    </div>
  );
}

export default FromMessage;

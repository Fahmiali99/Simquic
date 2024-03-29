import React from "react";
import ActionDear from "../../../Common/ActionDear";

function DearMessage({
  detail,
  status,
  month,
  date,
  postId,
  selectedMessageId,
  toggleOpen,
  open,
  dropdownRef,
}) {
  return (
    <div>
      <div className=" text-center flex items-center">
        <div className=" border-b-2 w-2/5 border-primaryGray-500" />
        <h1 className="px-4">
          {status} {month} {date}
        </h1>
        <div className=" border-b-2 w-2/5 border-primaryGray-500" />
      </div>
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        {detail.slice(0, postId).map((item, idx) => (
          <div key={item.id}>
            <span
              className="text-mm flex  font-bold py-2   text-gray-600"
              style={{ color: item.hcolor }}
            >
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
              <ActionDear
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
}

export default DearMessage;

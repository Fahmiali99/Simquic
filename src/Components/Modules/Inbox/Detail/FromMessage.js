import React from "react";

function FromMessage({ text, time }) {
  return (
    <div>
      <span className="text-mm flex justify-end font-bold py-2   text-gray-600">
        You
      </span>
      <div className=" flex justify-end">
        <span className="px-4 py-2  justify-end rounded-lg inline-block bg-stikerViolet text-black ">
          {text}
          <p className="text-ss py-1">{time}</p>
        </span>
      </div>
    </div>
  );
}

export default FromMessage;

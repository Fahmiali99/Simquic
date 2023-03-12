import React from "react";

function Send({ handleSubmit }) {
  return (
    <div>
      <div className="  pt-4 mb-2 sm:mb-0  ">
        <form onSubmit={handleSubmit} className="relative flex">
          <input
            type="text"
            placeholder="Type a new message"
            className="w-full px-4 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600  bg-gray-200 rounded-md py-3"
          />
          <div className="ml-10  items-center inset-y-0 hidden sm:flex">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <span className="font-bold">Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Send;

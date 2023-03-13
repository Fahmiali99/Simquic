import React from "react";

function LandingPage() {
  return (
    <div className="flex justify-center  py-6 px-8 bg-greens text-white font-sans rounded-lg ">
      <div
        className="overflow-y-auto flex items-center"
        style={{ height: "450px" }}
      >
        <h1 className=" text-8xl font-bold">
          Simple
          <span className="block">Quicks</span>
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;

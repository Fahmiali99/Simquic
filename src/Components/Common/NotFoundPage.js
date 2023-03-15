import React from "react";

function NotFoundPage() {
  return (
    <div className="flex justify-center py-6 px-8 bg-white text-black font-sans rounded-lg">
      <div
        className="overflow-y-auto flex items-center"
        style={{ height: "472px" }}
      >
        <div className="grid justify-center px-60 ">
          <div className="flex justify-center text-center">
            <h1 className="text-8xl  font-bold">
              404
              <span className="block text-2xl mt-1">Not Found</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

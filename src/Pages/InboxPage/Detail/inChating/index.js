import React from "react";
import { GrClose } from "react-icons/gr";
import BackPage from "../../../../Components/Common/BackPage";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function InChating() {
  const params = useParams();
  const { inbox } = useSelector((state) => state.inbox);
  const tipsSelected = inbox.find((item) => {
    return item.slug === params.slug;
  });

  return (
    <div className=" rounded-lg">
      <div className=" flex justify-between items-center shadow w-full py-[24px]  px-8">
        <div className="flex">
          <BackPage />
          <div className="pl-5">
            <h1 className=" text-primaryBlue text-ll">{tipsSelected?.email}</h1>
          </div>
        </div>
        <div className="">
          <GrClose className="text-xl" />
        </div>
      </div>
      <div className="  rounded-lg pt-6 px-8"></div>
    </div>
  );
}

export default InChating;

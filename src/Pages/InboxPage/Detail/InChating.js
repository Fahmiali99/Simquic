import React from "react";
import { GrClose } from "react-icons/gr";
import BackPage from "../../../Components/Common/BackPage";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chating from "../../../Components/Modules/Inbox/Chating";

function InChating() {
  const { id } = useParams();
  const { inbox } = useSelector((state) => state.inbox);
  const chat = inbox.find((item) => item.id === Number(id));

  return (
    <div className=" bg-white border-2 rounded-lg pb-6">
      <div className=" flex justify-between items-center shadow w-full py-[24px]  px-8">
        <div className="flex">
          <BackPage />
          <div className="pl-5">
            <h1 className=" text-primaryBlue text-ll font-bold">
              {chat?.name}
            </h1>
            <h1 className=" text-ss ">{chat?.postId} Participants</h1>
          </div>
        </div>
        <div className="">
          <a href="/">
            <GrClose className="text-xl" />
          </a>
        </div>
      </div>
      <div className="  rounded-lg pt-6 px-8">
        <Chating chat={chat} postId={chat?.postId} />
      </div>
    </div>
  );
}

export default InChating;

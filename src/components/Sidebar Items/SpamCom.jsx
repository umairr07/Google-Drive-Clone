import React from "react";
import Header from "../GoogleDrivePage/Header";
import MainSidebar from "../MainSidebar/MainSidebar";
import { SPAM_IMG } from "../../constants_urls/urls";

function SpamCom() {
  return (
    <div className="bg-[#F9FAFC]  dark:bg-[#1B1B1B]">
      <Header />

      <div className="flex ">
        <div className=" w-[20%]">
          <MainSidebar />
        </div>
        <div className="w-[80%] bg-[#fff] m-4 p-3 rounded-xl dark:bg-[#131314]">
          <h1 className="text-xl font-semibold">Spam</h1>
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={SPAM_IMG} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">Your spam is empty</p>
              <p className="font-normal">
                Files in spam won't appear anywhere else in Drive. Files are
                permanently removed after 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpamCom;

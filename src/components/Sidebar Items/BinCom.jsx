// import Header from "../GoogleDrivePage/Header";
// import MainSidebar from "../MainSidebar/MainSidebar";
import { BIN_IMG } from "../../constants_urls/urls";
import Header from "../GoogleDrivePage/Header";
import MainSidebar from "../MainSidebar/MainSidebar";

export default function BinCom() {
  return (
    <div className="bg-[#F9FAFC]  dark:bg-[#1B1B1B]">
      <Header />

      <div className="flex ">
        <div className=" w-[20%]">
          <MainSidebar />
        </div>
        <div className="w-[80%] bg-[#fff] m-4 p-3 rounded-xl dark:bg-[#131314]">
          <h1 className="text-xl font-semibold">Bin</h1>
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={BIN_IMG} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">Nothing in the bin</p>
              <p className="font-normal">
                Move items that you don't need to the bin. Items in the bin will
                be deleted forever after 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

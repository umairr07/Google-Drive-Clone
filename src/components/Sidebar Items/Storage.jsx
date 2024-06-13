import Header from "../GoogleDrivePage/Header";
import MainSidebar from "../MainSidebar/MainSidebar";
import { STORAGE_IMG } from "../../constants_urls/urls";

function Storage() {
  return (
    <div className="bg-[#F9FAFC]  dark:bg-[#1B1B1B]">
      <Header />

      <div className="flex ">
        <div className=" w-[20%]">
          <MainSidebar />
        </div>
        <div className="w-[80%] bg-[#fff] m-4 p-3 rounded-xl dark:bg-[#131314]">
          <h1 className="text-xl font-semibold">Storage</h1>
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={STORAGE_IMG} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">No files are using storage</p>
              <p className="font-normal">
                Items you own will use Drive storage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storage;

import Header from "../GoogleDrivePage/Header";
import MainSidebar from "../MainSidebar/MainSidebar";
import { COMPUTER_IMG } from "../../constants_urls/urls";

function ComputerCom() {
  return (
    <div className="bg-[#F9FAFC]  dark:bg-[#1B1B1B]">
      <Header />

      <div className="flex ">
        <div className=" w-[20%]">
          <MainSidebar />
        </div>
        <div className="w-[80%] bg-[#fff] m-4 p-3 rounded-xl dark:bg-[#131314]">
          <h1 className="text-xl font-semibold">Computer</h1>
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={COMPUTER_IMG} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">
                No folders syncing with Drive
              </p>
              <p className="font-normal">
                Drag your files and folders here or use the 'New' button to
                upload
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerCom;

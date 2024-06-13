import { DRIVE_IMG } from "../../constants_urls/urls";
import Header from "../GoogleDrivePage/Header";
import MainSidebar from "../MainSidebar/MainSidebar";

function Mydrive() {
  return (
    <div className="bg-[#F9FAFC]  dark:bg-[#1B1B1B]">
      <Header />

      <div className="flex ">
        <div className=" w-[20%]">
          <MainSidebar />
        </div>
        <div className="w-[80%] bg-[#fff] m-4 p-3 rounded-xl dark:bg-[#131314]">
          <h1 className="text-xl font-semibold">My Drive</h1>
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={DRIVE_IMG} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">
                A place for all of your files
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

export default Mydrive;

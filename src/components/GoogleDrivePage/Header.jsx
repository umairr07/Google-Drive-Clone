import { GDRIVE } from "../../constants_urls/urls";
import { CiSearch } from "react-icons/ci";
import { GrSort } from "react-icons/gr";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header({ newPhoto }) {
  console.log(newPhoto, "image recived");
  return (
    <div className="flex my-1 p-2 items-center w-100%">
      <Link to={"/"} className="flex items-center w-[20%] cursor-pointer">
        <img src={GDRIVE} alt="" className="h-[45px] w-[50px]" />
        <p>
          <span className="text-2xl">Drive</span>
        </p>
      </Link>

      <div className="flex justify-between w-[80%] items-center">
        <div className="flex w-[600px] justify-center items-center bg-[#E9EFF7] rounded-full">
          <CiSearch className="text-2xl cursor-pointer" />
          <div>
            <input
              type="search"
              className="w-[500px] p-3 focus:outline-none focus:ring-0 bg-[#E9EFF7]"
              placeholder="Search in drive"
            />
          </div>
          <GrSort className="text-2xl cursor-pointer" />
        </div>

        <div className="flex gap-3 mr-8 cursor-pointer">
          <GoQuestion className="text-2xl" />
          <IoSettingsOutline className="text-2xl" />
          <CgProfile className="text-2xl" src={newPhoto} />
          {/* {photoURL && <img src={photoURL} alt="" className="w-[50px]" />} */}
        </div>
      </div>
    </div>
  );
}

export default Header;

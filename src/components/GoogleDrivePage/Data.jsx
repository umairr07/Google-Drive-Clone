import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useEffect, useState } from "react";
import { MY_DRIVE } from "../../constants_urls/urls";
import { CiSearch } from "react-icons/ci";
import { GrSort } from "react-icons/gr";
import Header from "./Header";
import { AiTwotoneDelete } from "react-icons/ai";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

function Data({ files }) {
  console.log(files);
  const [app, setApp] = useState(true);
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [newFiles, setNewFiles] = useState(files);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [delFiles, setDelFiles] = useState([]);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleDisplayApp = () => {
    setApp(true);
    setMenu(false);
  };

  const handleDisplayMenu = () => {
    setMenu(true);
    setApp(false);
  };

  useEffect(() => {
    setNewFiles(files);
  }, [files]);

  const filterBySearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filteredFiles = files.filter((file) =>
      file.fileName.toLowerCase().includes(value)
    );

    setNewFiles(filteredFiles);
  };

  const deleteData = (id) => {
    console.log("Deleting file with id:", id);
    setNewFiles(newFiles.filter((file) => file.id !== id));
  };

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Welcome to Drive</h1>
          </div>
          <div className="flex gap-5 justify-between rounded-3xl p-2">
            <GiHamburgerMenu
              className="text-xl cursor-pointer"
              onClick={handleDisplayApp}
            />
            <AiOutlineAppstore
              className="text-xl cursor-pointer"
              onClick={handleDisplayMenu}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-center w-[80%] items-center m-auto py-5 pb-10">
            <div className="flex w-[600px] justify-center items-center bg-[#E9EFF7] rounded-full dark:bg-[#282A2C]">
              <CiSearch className="text-2xl cursor-pointer" />
              <div>
                <input
                  value={searchValue}
                  onChange={filterBySearch}
                  type="search"
                  className="lg:w-[500px] p-3 focus:outline-none focus:ring-0 bg-[#E9EFF7] dark:bg-[#282A2C] sm:w-[200px] "
                  placeholder="Search in drive"
                />
              </div>

              {/* <div>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <GrSort className="text-2xl cursor-pointer" />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <p>Sort By</p>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {newFiles.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-8 my-16">
            <img src={MY_DRIVE} alt="" className="w-[300px]" />
            <div className="text-center">
              <p className="text-xl font-medium">
                Welcome to Drive, the home for all your files
              </p>
              <p className="font-normal">Use the “New” button to upload</p>
            </div>
          </div>
        ) : (
          app && (
            <div>
              <div className="flex justify-between p-2 sm:hidden lg:flex">
                <p>File Name</p>
                <p>Size</p>
                <p>Last Modified</p>
              </div>
              {newFiles.map((file, idx) => (
                <div
                  key={file.id} // using file.id instead of idx
                  className="flex justify-between my-5 bg-[#E9EFF7] p-2 rounded-lg dark:bg-[#282A2C] sm:flex-col sm:justify-center  lg:flex-row lg:justify-between lg:p-3"
                >
                  <a
                    href={file.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="w-[300px] ">
                      {file.fileName.slice(0, 25)}.....
                    </p>
                  </a>
                  <p className="w-[150px]">{formatFileSize(file.size)}</p>
                  <p>
                    {new Date(file.timestamp?.seconds * 1000).toUTCString()}
                  </p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div>
        {newFiles.length === 0 ? (
          <p></p>
        ) : (
          menu && (
            <div className="p-3 flex gap-10 flex-wrap sm:justify-center lg:justify-start">
              {newFiles.map((file, idx) => (
                <div key={file.id}>
                  <div className="w-[350px] h-[200px] bg-[#F0F5F8] p-3 rounded-lg flex flex-col gap-4 cursor-pointer dark:bg-[#282A2C] ">
                    <p>{file.fileName.slice(0, 25)}.....</p>

                    <p className="bg-[#fff] w-[200px] p-5 text-center rounded-lg m-auto dark:bg-[#1d1d1e]">
                      {file.fileType}
                    </p>
                    <div className="flex justify-between items-center">
                      <p>{formatFileSize(file.size)}</p>
                      <AiTwotoneDelete
                        className="text-xl cursor-pointer"
                        onClick={() => deleteData(file.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className="hidden">
        <Header dataFiles={files} />
      </div>
    </div>
  );
}

export default Data;

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";
import { MY_DRIVE } from "../../constants_urls/urls";

function Data({ files }) {
  // console.log(files);
  const [app, setApp] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleDisplayApp = () => {
    setApp(true);
    setMenu(false);
  };

  const handleDisplayMenu = () => {
    setMenu(true);
    setApp(false);
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
      </div>
      <div>
        {files.length === 0 ? (
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
              <div className="flex justify-between p-2">
                <p>File Name</p>
                <p>Size</p>
                <p>Last Modified</p>
              </div>
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex justify-between my-5 bg-[#E9EFF7] p-2 rounded-lg"
                >
                  <a
                    href={file.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{file.fileName}</p>
                  </a>
                  <p>{file.size}</p>
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
        {files.length === 0 ? (
          <p></p>
        ) : (
          menu && (
            <div className="p-3 flex gap-10 flex-wrap ">
              {files.map((file, idx) => (
                <div key={idx}>
                  <a
                    href={file.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[350px] h-[200px] bg-[#F0F5F8] p-3 rounded-lg flex flex-col gap-4 cursor-pointer"
                  >
                    <p>{file.fileName}</p>
                    <p className="bg-[#fff] w-[200px] p-5 text-center rounded-lg m-auto">
                      {file.fileType}
                    </p>
                    <p>{file.size}</p>
                  </a>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Data;

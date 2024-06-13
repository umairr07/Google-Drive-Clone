import { IoAddOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiCloudStorageOutline } from "react-icons/ti";
import { Box, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
// import ScreenreaderLabelExample from "./ProgressBar";

function MainSidebar() {
  const [modal, setModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (currentUser) {
      const q = query(
        collection(db, "myFiles"),
        where("userId", "==", currentUser.uid)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const userFiles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFiles(userFiles);
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  const openNewModal = () => setModal(true);
  const handleOnClose = () => setModal(false);

  const hadnleInputFiles = (e) => {
    let inputFile = e.target.files[0];
    if (inputFile) {
      setFile(inputFile);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);

        await addDoc(collection(db, "myFiles"), {
          timestamp: serverTimestamp(),
          fileName: file.name,
          fileURL: url,
          size: snapshot.metadata.size,
          fileType: snapshot.metadata.contentType,
          userId: currentUser.uid,
        });

        setUploading(false);
        setFile(null);
        setModal(false);
      } catch (error) {
        console.error("Error uploading file: ", error);
        setUploading(false);
      }
    }
  };
  return (
    <div>
      <Modal open={modal} onClose={handleOnClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96  bg-white shadow-lg p-4 rounded-xl  outline-none dark:bg-[#131314] dark:text-[#fff]">
          <div className="flex flex-col justify-center items-center gap-10">
            <p className="text-xl font-bold">Select a file to Upload</p>
            <div>
              {uploading ? (
                <p className="bg-green-600 p-2 text-white w-[150px] text-center rounded-lg">
                  Uploading....
                </p>
              ) : (
                <div className="flex flex-col justify-center items-center gap-10">
                  <input
                    type="file"
                    name="inputFile"
                    onChange={hadnleInputFiles}
                  />
                  <button
                    className="p-2 w-[150px] bg-[#1B73E9] text-[#fff] rounded-lg"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>

      <div className="flex">
        <div className="w-[20%] p-2">
          <div
            className="flex items-center w-[100px] p-3 ml-2 gap-2 rounded-lg cursor-pointer bg-[#f5f5f5] hover:bg-[#E9EEF6] dark:bg-[#37393B] dark:hover:bg-[#131314]"
            onClick={openNewModal}
          >
            <IoAddOutline className="text-2xl" />
            <span>New</span>
          </div>

          <div className="pl-5 flex flex-col gap-2 my-5 justify-center ">
            <Link to="/drive">
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] bg-[#E9EEF6] p-2  rounded-2xl dark:bg-[#282A2C]">
                <GoHomeFill className="text-2xl" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/mydrive">
              <div
                className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] p-2  rounded-2xl dark:bg-[#282A2C]"
                // onClick={goToMyDrive}
              >
                <FaGoogleDrive className="text-2xl" />
                <span>My Drive</span>
              </div>
            </Link>

            <Link to={"/computer"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px]  w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <FaComputer className="text-2xl" />
                <span>Computers</span>
              </div>
            </Link>

            <Link to={"/shared"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <FaUserFriends className="text-2xl" />
                <span>Shared with me</span>
              </div>
            </Link>

            <Link to={"/recent"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <MdOutlineWatchLater className="text-2xl" />
                <span>Recent</span>
              </div>
            </Link>

            <Link to={"/starred"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <IoMdStarOutline className="text-2xl" />
                <span>Starred</span>
              </div>
            </Link>

            <Link to={"/spam"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <RiSpam2Line className="text-2xl" />
                <span>Spam</span>
              </div>
            </Link>

            <Link to={"/bin"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <RiDeleteBin6Line className="text-2xl" />
                <span>Bin</span>
              </div>
            </Link>

            <Link to={"/storage"}>
              <div className="flex items-center gap-5 cursor-pointer h-[40px] w-[250px] hover:bg-[#E9EEF6] hover:rounded-2xl hover:w-[250px] p-2 dark:hover:bg-[#282A2C]">
                <TiCloudStorageOutline className="text-2xl" />
                <span>Storage</span>
              </div>
            </Link>
            {/* <div>
              <ScreenreaderLabelExample />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;

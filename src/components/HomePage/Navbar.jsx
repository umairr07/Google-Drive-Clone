import { useEffect, useState } from "react";
import { GDRIVE, GOOGLE_LOGO } from "../../constants_urls/urls";
import { auth, googleProvider } from "../../config/firebase";
import gDriveLogo from "../../assets/g-drive-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Header from "../GoogleDrivePage/Header";

function Navbar() {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      let userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential?.user);
      console.log(userCredential.user, "user logged in");
      localStorage.setItem(
        "photoURL",
        JSON.stringify(userCredential?.user?.photoURL)
      );
      setPhotoURL(userCredential?.user?.photoURL);
      navigate("/drive");
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   // This effect will run whenever `user` state changes
  //   if (user && user.photoURL) {
  //     setPhotoURL(user.photoURL);
  //   }
  // }, [user]);

  const sigupWIthEmailAndPass = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setEmailModal(true);
      setEmail("");
      setPassword("");
      // navigate("/drive");
    } catch (err) {
      console.log(err);
    }
  };

  const sigInWIthEmailAndPass = async () => {
    try {
      const newUser = await signInWithEmailAndPassword(auth, email, password);
      console.log(newUser);
      setUser(newUser);
      navigate("/drive");
    } catch (err) {
      console.log(err);
    }
  };

  // const gotoDrive = () => {
  //   console.log(user);
  //   if (user) {
  //     navigate("/drive");
  //   }
  // };

  const openModal = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const closeEmailModal = () => setEmailModal(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[550px] bg-white shadow-lg p-4 rounded-xl ">
          <div className="flex flex-col justify-center items-center gap-5 my-2">
            <img src={GOOGLE_LOGO} alt="" className="w-[100px]" />
            <div className="text-center">
              <p className="text-xl font-semibold">Sign in</p>
              <p>to continue to Google Drive</p>
            </div>

            <div className="flex flex-col  gap-2">
              <div>
                <label htmlFor="">Email : </label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="">Password : </label>
                <br />
                <input
                  type="password"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="********"
                />
              </div>
              <div className="m-auto">
                <button
                  className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]"
                  onClick={sigupWIthEmailAndPass}
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center">
                Already have an Account?{" "}
                <button
                  className="text-[#1B73E9]"
                  onClick={() => setEmailModal(true)}
                >
                  Sign in
                </button>
              </p>
              <p className="text-center">OR</p>
            </div>
            <button
              className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]  "
              onClick={handleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={emailModal}
        onClose={closeEmailModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[550px] bg-white shadow-lg p-4 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-5 my-2">
            {/* <img src={gDriveLogo} alt="" className="w-[50px]" /> */}
            <div className="text-center">
              <p className="text-xl font-semibold">Sign in</p>
              <p>to continue to Google Drive</p>
            </div>

            <div className="flex flex-col  gap-2">
              <div>
                <label htmlFor="">Email : </label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="">Password : </label>
                <br />
                <input
                  type="password"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="********"
                />
              </div>
              <div className="m-auto">
                <button
                  className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]"
                  onClick={sigInWIthEmailAndPass}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <div className="flex justify-between p-2 sm:justify-between">
        <div className="flex items-center">
          <img
            src={gDriveLogo}
            alt=""
            className=" lg:h-[30px] lg:w-[35px] sm:h-[30px] sm:w-[40px] mr-2"
          />
          <p className="sm:flex lg:gap-2">
            <span className="lg:font-bold lg:text-2xl sm:text-xl">Google</span>{" "}
            <span className="lg:text-2xl sm:text-xl">Drive</span>
          </p>
        </div>

        <div className="flex gap-5 mr-10">
          <button
            className="p-2 text-[#1A73E8] font-semibold text-[18px] hover:bg-[#F5f5f5]"
            onClick={openModal}
          >
            Sign in
          </button>
          <button
            className="p-2 font-semibold bg-[#1A73E8] text-[#fff] rounded-lg w-[120px] sm:hidden md:block"
            // onClick={gotoDrive}
          >
            Go to Drive
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

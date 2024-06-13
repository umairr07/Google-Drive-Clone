import { Box, Modal } from "@mui/material";
import { GOOGLE_LOGO, RIGHT_IMG } from "../../constants_urls/urls";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [emailModal, setEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState(null);

  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

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

  const closeEmailModal = () => setEmailModal(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[550px] bg-white shadow-lg p-4 rounded-xl">
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
                  onClick={sigInWIthEmailAndPass}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="w-[100%] flex my-14 sm:flex-col lg:flex-row lg:my-20">
        {/* left section */}
        <div className="w-[50%] pl-20 my-10 sm:w-full sm:pl-5 sm:my-0 lg:pl-20 ">
          <div className="flex flex-col gap-8">
            <p className="text-7xl w-[100%] sm:text-2xl md:text-4xl lg:text-7xl lg:w-[80%]">
              Easy and secure access to your content
            </p>
            <p className="text-2xl w-[75%] sm:text-xl lg:text-2xl lg:w-[80%]">
              Store, share, and collaborate on files and folders from your
              mobile device, tablet, or computer
            </p>
          </div>
          <div className="flex gap-3 my-10 text-[17px] ">
            <p>Don`t have an account? </p>
            <button className="text-[#1A73E8]" onClick={openModal}>
              Signin to create account
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="w-[50%] sm:w-full ">
          <img src={RIGHT_IMG} alt="" className="w-[90%] sm:m-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

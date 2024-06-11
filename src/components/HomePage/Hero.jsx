import { Box, Modal } from "@mui/material";
import { GOOGLE_LOGO, RIGHT_IMG } from "../../constants_urls/urls";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleSignIn = async () => {
    try {
      let user = await signInWithPopup(auth, googleProvider);
      setUser(user);
      console.log(user);
      navigate("/drive");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[400px] bg-white shadow-lg p-4 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-5 my-10">
            <img src={GOOGLE_LOGO} alt="" className="w-[100px]" />
            <div className="text-center">
              <p className="text-xl font-semibold">Sign in</p>
              <p>to continue to Google Drive</p>
            </div>
            <button
              className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg"
              onClick={handleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </Box>
      </Modal>
      <div className="w-[100%] flex my-14">
        {/* left section */}
        <div className="w-[50%] pl-20 my-10">
          <div className="flex flex-col gap-8">
            <p className="text-7xl w-[100%]">
              Easy and secure access to your content
            </p>
            <p className="text-2xl w-[75%]">
              Store, share, and collaborate on files and folders from your
              mobile device, tablet, or computer
            </p>
          </div>
          <div className="flex gap-3 my-10 text-[17px]">
            <p>Don`t have an account? </p>
            <button className="text-[#1A73E8]" onClick={openModal}>
              Signin to create account
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="w-[50%]">
          <img src={RIGHT_IMG} alt="" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

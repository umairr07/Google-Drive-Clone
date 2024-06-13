import { GDRIVE } from "../../constants_urls/urls";

import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

function Header({ dataFiles }) {
  const [photoURL, setPhotoURL] = useState("");
  const [anchorElSettings, setAnchorElSettings] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  const openSettings = Boolean(anchorElSettings);
  const openProfile = Boolean(anchorElProfile);

  const handleClickSettings = (event) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleCloseSettings = () => {
    setAnchorElSettings(null);
  };

  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  useEffect(() => {
    const newPhotoURL = localStorage.getItem("photoURL");
    try {
      const parsedURL = JSON.parse(newPhotoURL);
      setPhotoURL(parsedURL);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("photoURL");
    navigate("/");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="flex my-1 p-2 items-center w-100% justify-between">
        <div className="flex items-center w-[20%] cursor-pointer">
          <img src={GDRIVE} alt="" className="h-[45px] w-[50px]" />
          <p>
            <span className="text-2xl">Drive</span>
          </p>
        </div>

        <div className="flex gap-4 cursor-pointer mr-4 items-center">
          <MdOutlineLightMode className="text-3xl" onClick={handleTheme} />
          <GoQuestion className="text-2xl" />

          {/* <Popup trigger={<button> </button>} position="right center">
            <div className="mt-[50px]">Popup content here !!</div>
          </Popup> */}

          <div>
            <p
              onClick={handleClickSettings}
              aria-controls={openSettings ? "settings-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openSettings ? "true" : undefined}
            >
              <IoSettingsOutline className="text-2xl " />
            </p>
            <Menu
              id="settings-menu"
              anchorEl={anchorElSettings}
              open={openSettings}
              onClose={handleCloseSettings}
              MenuListProps={{
                "aria-labelledby": "settings-button",
              }}
            >
              <MenuItem onClick={handleCloseSettings}>Light</MenuItem>
              <MenuItem onClick={handleCloseSettings}>Dark</MenuItem>
              <MenuItem onClick={handleCloseSettings}>System</MenuItem>
            </Menu>
          </div>

          <div>
            <p
              onClick={handleClickProfile}
              aria-controls={openProfile ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? "true" : undefined}
            >
              {photoURL ? (
                <img src={photoURL} alt="" className="rounded-full w-[50px] " />
              ) : (
                <CgProfile className="text-2xl" />
              )}
            </p>
            <Menu
              id="profile-menu"
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                "aria-labelledby": "profile-button",
              }}
            >
              <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
              <MenuItem onClick={handleCloseProfile}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  dataFiles: PropTypes.array.isRequired,
};

export default Header;

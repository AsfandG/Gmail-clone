import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const signout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <main className="header">
      <section className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail-logo"
        />
      </section>

      <section className="header_middle">
        <SearchIcon />
        <input type="text" />
        <ArrowDropDownIcon />
      </section>

      <section className="header_right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          src={user?.photoUrl}
          onClick={signout}
          sx={{ width: 30, height: 30, cursor: "pointer" }}
        />
      </section>
    </main>
  );
};

export default Header;

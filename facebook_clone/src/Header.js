import React from "react";
import "./Header.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header_left">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iOewmwpKr8D0RZYHZ_fKVxjO7G287chknQ&usqp=CAU" />
          <div className="Header_search">
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="Header_mid">
          <div className="Header_option Header__option--active">
            <HomeIcon />
          </div>
          <div className="Header_option Header__option--active">
            <FlagIcon />
          </div>
          <div className="Header_option Header__option--active">
            <VideoLabelIcon />
          </div>
          <div className="Header_option Header__option--active">
            <StorefrontIcon />
          </div>
          <div className="Header_option Header__option--active">
            <SupervisedUserCircleIcon />
          </div>
        </div>
        <div className="Header_right">
          <div className="Hearder_info">
            <Avatar srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" />
            <h4>M Shahzaib</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

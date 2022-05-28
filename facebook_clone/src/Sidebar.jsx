import React from "react";
import Rowsidebar from "./Rowsidebar";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PostAddIcon from "@material-ui/icons/PostAdd";
import GroupIcon from "@material-ui/icons/Group";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Side_bar">
      <Rowsidebar
        title="Shahzaib"
        ProfilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
      />
      <Rowsidebar
        title="Covid-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <Rowsidebar Icon={PostAddIcon} title="Pages" />
      <Rowsidebar title="People" Icon={GroupIcon} />
      <Rowsidebar title="Messenger" Icon={MarkunreadIcon} />
      <Rowsidebar title="Marketplace" Icon={StorefrontIcon} />
      <Rowsidebar title="Videos" Icon={VideoLibraryIcon} />
      <Rowsidebar title="More" Icon={ExpandMoreIcon} />
    </div>
  );
};

export default Sidebar;

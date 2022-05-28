import React from "react";
import Avatar from "@mui/material/Avatar";
import "./RowSidebar.css";
const Rowsidebar = ({ Icon, ProfilePic, title }) => {
  return (
    <>
      <div className="Row_Sidebar">
        {ProfilePic && <Avatar src={ProfilePic} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default Rowsidebar;

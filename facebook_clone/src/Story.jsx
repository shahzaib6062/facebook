import React from "react";
import "./Story.css";
import Avatar from "@mui/material/Avatar";

const Story = ({ Image, ImgSrc, title }) => {
  return (
    <>
      <div className="Story" style={{ backgroundImage: `url(${Image})` }}>
        <div className="Story_detail">
          <Avatar className="Story_Avatar" src={ImgSrc} />
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
};

export default Story;

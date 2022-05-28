import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Post = ({ Profilepic, Name, Message, PostImg }) => {
  return (
    <div className="Post">
      <div className="Post_top">
        <Avatar src={Profilepic} className="Post_Avatar" />
        <div className="Post_info">
          <h4>{Name}</h4>
          <p>TimeStamp...</p>
        </div>
      </div>
      <div className="Post_message">
        <p>{Message}</p>
      </div>
      <div className="Post_image">
        <img src={PostImg} />
      </div>
      <div className="Post_options">
        <div className="Post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="Post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="Post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="Post_option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;

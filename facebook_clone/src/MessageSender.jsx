import { Avatar } from "@mui/material";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import "./MessageSender.css";

const MessageSender = () => {
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const Clicked = (event) => {
    event.preventDefault();
    setInputText("");
    setInputUrl("");
  };
  return (
    <div className="MessageSender">
      <div className="MessageSender_top">
        <form>
          <Avatar />
          <input
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            type="text"
            placeholder="Enter Your Message"
          />
          <input
            value={inputUrl}
            onChange={(event) => setInputUrl(event.target.value)}
            type="url"
            placeholder="Enter URL (optional)"
          />
          <button onClick={Clicked}>Hidden Button</button>
        </form>
      </div>
      <div className="MessageSender_bottom">
        <div className="MessageButton_option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="MessageButton_option">
          <BurstModeIcon style={{ color: "green" }} />
          <h4>Photos/Videos</h4>
        </div>
        <div className="MessageButton_option">
          <SentimentSatisfiedIcon style={{ color: "yellow" }} />
          <h4>Feelings/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;

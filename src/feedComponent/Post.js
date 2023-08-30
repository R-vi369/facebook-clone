import React from "react";
import "./post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
const Post = () => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__left">
          <Avatar />
          <div className="post__info">
            <h4>Pablo Escobar</h4>
            <p>
              12:43 PM <PublicIcon />
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>

      <div className="post__middle">
        <p>this is message body</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7H2WxZPedKNJA1E-NAsAbiD3-y-nek-13bA&usqp=CAU" />
      </div>
      <div className="post__bottom">
        <div className="post__bottomOption">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__bottomOption">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__bottomOption">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
      <div className="post__buttom"></div>
    </div>
  );
};

export default Post;

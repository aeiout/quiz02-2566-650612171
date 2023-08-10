import { comments } from "@/libs/comments";
import { Reply } from "./Reply";
import { useState } from "react";
const [isLikeShown,setIsLikeShown]= useState(false);
export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {

  
  
  if(likeNum !== 0) {
  setIsLikeShown=(!isLikeShown);
}
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
          </div>
        </div>
      </div>
      <Reply/>
      {/* map-loop render Reply component here */}
      {/* { replies.map((Reply) => (
        <Reply
          key ={Reply.username}
          userImagePath={Reply.userImagePath}
          username={Reply.username}
          commentText={Reply.commentText}
          likeNum={Reply.likeNum}
        />
      ))} */}
    </div>
  );
};

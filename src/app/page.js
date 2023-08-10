"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";


export default function HomePage() {



  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner user="Ueaarthorn Uawongtrakul 650612171" text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" liked="100 คน"></PostOwner>

        {/* Comment Example */}
        {/* <Comment /> */}

        {/* Reply Example */}
        {/* <Reply /> */}

        {/* map-loop render Comment component here */}
        {comments.map((comment) =>(
          <Comment
          key={comment.commentText} 
          userImagePath={comment.userImagePath}
          username={comment.username}
          commentText={comment.commentText}
          likeNum={comment.likeNum}
          replies={comment.replies}
          />
        ))}
        
      </div>
    </div>
  );
}

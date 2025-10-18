import React, { useState } from "react";
import "../styles/CommentInput.css";

const CommentInput = () => {
  const [comment, setComment] = useState("xxx-xx-xxx-xx-xxx");

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setComment(value);
    }
  };

  return (
    <div className="comment-input-container">
      <h3 className="comment-title">Comment (Max 500 Chars)</h3>
      <textarea
        className="comment-textarea"
        value={comment}
        onChange={handleCommentChange}
        maxLength={500}
      />
    </div>
  );
};

export default CommentInput;

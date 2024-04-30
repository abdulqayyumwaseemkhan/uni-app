import React from "react";

const Comment = (Props) => {
  return (
    <div>
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <a className="avatar">
            <img src="/images/matt.jpg" />
          </a>
          <div className="content">
            <a className="author">{Props.name}</a>
            <div className="metadata">
              <span className="date">{Props.time}</span>
            </div>
            <div className="text">{Props.comment}</div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;

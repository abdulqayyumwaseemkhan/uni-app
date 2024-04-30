import React from "react";

const Card = (Props) => {
  return (
    <div className="grid text-center">
      <div className="ui card">
        <div className="image">
          <img src="/images/kristy.png" />
        </div>
        <div className="content">
          <a className="header">Kristy</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
        <div className="ui comments">
          <div className="comment">{Props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;

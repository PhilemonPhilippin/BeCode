import React from "react";
import "./Emoji.css";

// {
//     "title": "100",
//     "symbol": "💯",
//     "keywords": "100 hundred points symbol symbol wow wow win win perfect perfect parties parties"
// }

const Emoji = ({emoji}) => {
  return (
    <div className="emoji-container">
      <span>{emoji.title}</span> <span>{emoji.symbol}</span>
    </div>
  );
};

export default Emoji;

import { useState } from "react";
import './Emoji.css'

const Emoji = () => {
  const [emoji, setEmoji] = useState("😃");

  const handleChange = () => {
    emoji === "😃" ? setEmoji("😞") : setEmoji("😃");
  };
  return (
    <div className="emoji">
      <span>{emoji}</span>
      <button onClick={handleChange}>Change Mood</button>
    </div>
  );
};

export default Emoji;

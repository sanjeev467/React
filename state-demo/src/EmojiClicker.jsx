import { useState } from "react";
import { v4 as uuid } from "uuid"; // npm install uuid to generate uniqued ids

// Array State

export default function EmojiClicker() {
  //  const [emojis, setEmojis] = useState(["😭"]); // updating this as objects in array
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😭" }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😘" }]); // copys the array and create obj and creates new key and new emoji in the obj
  };

  const deleteEmoji = (id) => {
    // delete the element with the specified id
    // we use filter to make copy of the emojis array that includes everything

    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  const makeThemHEarts = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  };

  // deleting emoji is notmas easy as addEmoji because we need to provide that which emoji to be deleted
  // this is done by id
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          id={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeThemHEarts}>Make them all Hearts</button>
    </div>
  );
}

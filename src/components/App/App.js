import React from "react";
import "./App.css";

import data from "./data.js";
import Instructions from "../Instructions/Instructions.js";
import AnimalCard from "../AnimalCard/AnimalCard";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => {
      return `${information[0]}: ${information[1]}`;
    })
    .join("\n");
  alert(alertInformation);
}

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "test grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];

function App1() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}

      <Instructions />
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          additional={animal.additional}
          diet={animal.diet}
          scientificName={animal.scientificName}
          size={animal.size}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  );
}

export default App;

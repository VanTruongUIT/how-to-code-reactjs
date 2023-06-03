import React from "react";
import { createUseStyles } from "react-jss";

// import "./App.css";
import data from "./data.js";
import Instructions from "../Instructions/Instructions.js";
import AnimalCard from "../AnimalCard/AnimalCard";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CartSuccess";

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  },
});

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
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      ))}
    </div>
  );
}

function App2() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}
export default App2;

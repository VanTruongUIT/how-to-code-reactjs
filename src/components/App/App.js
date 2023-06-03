import React, { useState, useReducer } from "react";
import { createUseStyles } from "react-jss";

import "./App.css";
import data from "./data.js";
import Instructions from "../Instructions/Instructions.js";
import AnimalCard from "../AnimalCard/AnimalCard";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CartSuccess";
import Product from "../Product/Product.js";

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

function App3() {
  return <Product />;
}

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      apple: "",
      count: 0,
      name: "",
      "gift-wrap": false,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App4() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckBox ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {isSubmitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <fieldset disabled={isSubmitting}>
          <label htmlFor="">
            <p>Name</p>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>
        <fieldset disabled={isSubmitting}>
          <label htmlFor="">
            <p>Apples</p>
            <select
              name="apple"
              id="apple"
              onChange={handleChange}
              value={formData.apple || ""}
            >
              <option value="">--Please choose an option</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label htmlFor="">
            <p>Count</p>
            <input
              type="number"
              name="count"
              id="count"
              onChange={handleChange}
              step="1"
              value={formData.count || ""}
            />
          </label>
          <label htmlFor="">
            <p>Gift Wrap</p>
            <input
              type="checkbox"
              name="gift-wrap"
              id="gift-wrap"
              onChange={handleChange}
              checked={formData["gift-wrap"] || false}
              disabled={formData.apple !== "fuji"}
            />
          </label>
        </fieldset>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default App4;

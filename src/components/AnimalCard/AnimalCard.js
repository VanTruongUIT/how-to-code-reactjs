import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.js";
import AnimalDetails from "../AnimalDetails/AnimalDetails.js";

export default function AnimalCard({ size, name, ...props }) {
  return (
    <Card title="Animal" details={<AnimalDetails {...props} />}>
      <h3>{name}</h3>
      <div>{size}kg</div>
    </Card>
  );
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

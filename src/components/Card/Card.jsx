import { useState, useEffect } from "react";
import { baseUnits, calculations, inputProps } from "./Card.helpers";
import "./Card.scss";

const Card = ({ variant }) => {
  const [value, setValue] = useState("");
  const [units, setUnits] = useState(baseUnits);

  const handleInput = (e) => {
    if (e.target.value.length < 6) {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    setUnits(calculations(value));
  }, [value]);

  return (
    <div className="card">
      <div className="card__partBlock">
        <h1 className="card__title">Metric/Imperial conversion</h1>
        <input {...inputProps} value={value} onChange={(e) => handleInput(e)} />
      </div>
      <div className={`card__partBlock card__description--${variant ? "dark" : "white"}`}>
        <p className="paragraph__title">Length (Meter/Feet)</p>
        <p className="paragraph">
          {value || 0} meters = {units.feet} feet | {value || 0} feet = {units.meters} meters
        </p>

        <p className="paragraph__title">Volume (Liters/GaIIons)</p>
        <p className="paragraph">
          {value || 0} liters = {units.gallons} gallons | {value || 0} gallons = {units.liters}{" "}
          liters
        </p>

        <p className="paragraph__title">Mass (Kilograms/Pounds)</p>
        <p className="paragraph">
          {value || 0} kilos = {units.pounds} pounds | {value || 0} pounds = {units.kilos} kilos
        </p>
      </div>
    </div>
  );
};

export default Card;

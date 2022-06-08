import { useState, useEffect } from "react";
import "./Card.scss";

const baseUnits = {
  meters: 0,
  feet: 0,
  liters: 0,
  gallons: 0,
  kilos: 0,
  pounds: 0,
};

const Card = ({ variant }) => {
  const [value, setValue] = useState("");
  const [units, setUnits] = useState(baseUnits);

  const handleInput = (e) => {
    if (e.target.value.length < 7) {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    setUnits({
      meters: (value * 3.2808399).toFixed(2),
      feet: (value * 0.3048).toFixed(2),
      liters: (value * 0.264172).toFixed(2),
      gallons: (value * 4.54609).toFixed(2),
      kilos: (value * 2.20462).toFixed(2),
      pounds: (value * 0.45359237).toFixed(2),
    });
  }, [value]);

  return (
    <div className="card">
      <div className="card__partBlock">
        <h1 className="card__title">Metric/Imperial conversion</h1>
        <input
          type="number"
          className="card__input"
          placeholder="Type number"
          value={value}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className={`card__partBlock card__description--${variant ? variant : "white"}`}>
        <p className="paragraph__title">Length (Meter/Feet)</p>
        <p className="paragraph">
          {value || 0} meters = {meters} feet | {value || 0} feet = {feet} meters
        </p>

        <p className="paragraph__title">Volume (Liters/GaIIons)</p>
        <p className="paragraph">
          {value || 0} liters = {liters} gallons | {value || 0} gallons = {gallons} liters
        </p>

        <p className="paragraph__title">Mass (Kilograms/Pounds)</p>
        <p className="paragraph">
          {value || 0} kilos = {kilos} pounds | {value || 0} pounds = {pounds} kilos
        </p>
      </div>
    </div>
  );
};

export default Card;

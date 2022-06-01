import { useState } from "react";
import "./Card.scss";

const Card = ({ variant }) => {
  const [value, setValue] = useState();
  const [meters, setMeters] = useState(0);
  const [feet, setFeet] = useState(0);

  const handleInput = (e) => {
    console.log("before setValue", value);
    setValue(e.target.value);
    console.log("after setValue", value);
    setMeters((e.target.value * 3.2808399).toFixed(2));
    setFeet((e.target.value * 0.3048).toFixed(2));
  };

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
          {/* {value} meters = {(value * 3.2808399).toPrecision(2)} feet | {value} feet ={" "}
          {(value * 0.3048).toPrecision(2)} meters */}
        </p>

        <p className="paragraph__title">Volume (Liters/GaIIons)</p>
        <p className="paragraph">
          {value} liters = 0.000 gallons | {value} gallons = 0.000 liters
        </p>

        <p className="paragraph__title">Mass (Kilograms/Pounds)</p>
        <p className="paragraph">
          {value} kilos = 0.000 pounds | {value} pounds = 0.000 kilos
        </p>
      </div>
    </div>
  );
};

export default Card;

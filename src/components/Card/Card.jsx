import "./Card.scss";

const Card = ({ variant }) => (
  <div className="card">
    <div className="card__partBlock">
      <h1 className="card__title">Metric/Imperial conversion</h1>
      <input type="number" className="card__input" placeholder="Type number" />
    </div>
    <div className={`card__partBlock card__description--${variant ? "dark" : "white"}`}>
      <p className="paragraph__title">Length (Meter/Feet)</p>
      <p className="paragraph">0 meters = 0.000 feet | 0 feet = 0.000 meters</p>

      <p className="paragraph__title">Volume (Liters/GaIIons)</p>
      <p className="paragraph">0 liters = 0.000 gallons | 0 gallons = 0.000 liters</p>

      <p className="paragraph__title">Mass (Kilograms/Pounds)</p>
      <p className="paragraph">0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos</p>
    </div>
  </div>
);

export default Card;

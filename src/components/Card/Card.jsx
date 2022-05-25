import "./Card.scss";

const Card = ({ variant }) => (
  <div className="card">
    <div className="card__part">
      <p className="paragraph paragraph__title paragraph__title--upper">
        Metric/Imperial conversion
      </p>
      <h1 className="card__result">0</h1>
    </div>
    <div className={`card__part card__description card__description--${variant}`}>
      <p className="paragraph paragraph__title">Length (Meter/Feet)</p>
      <p className="paragraph">0 meters = 0.000 feet | O feet = 0.000 meters</p>

      <p className="paragraph paragraph__title">Volume (Liters/GaIIons)</p>
      <p className="paragraph">O liters = 0.000 gallons | O gallons = 0.000 liters</p>

      <p className="paragraph paragraph__title">Mass (Kilograms/Pounds)</p>
      <p className="paragraph">0 kilos = 0.000 pounds I O pounds = 0.000 kilos</p>
    </div>
  </div>
);

export default Card;

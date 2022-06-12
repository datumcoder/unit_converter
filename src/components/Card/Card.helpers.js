export const baseUnits = {
  meters: 0,
  feet: 0,
  liters: 0,
  gallons: 0,
  kilos: 0,
  pounds: 0,
};

export const calculations = (value) => ({
  meters: (value * 0.3048).toFixed(2),
  feet: (value * 3.2808399).toFixed(2),
  liters: (value * 4.54609).toFixed(2),
  gallons: (value * 0.264172).toFixed(2),
  kilos: (value * 0.45359237).toFixed(2),
  pounds: (value * 2.20462).toFixed(2),
});

export const inputProps = {
  type: "number",
  className: "card__input",
  placeholder: "Type number",
};

import React from "react";
import "./TestComponent.scss";

const TestComponent = ({ containerStyle, titleStyle, title, children }) => (
  <div className={`testContainer ${containerStyle}`}>
    <h1 className={titleStyle}>{title}</h1>
    {children}
  </div>
);

export default TestComponent;

// NOTE: Object Destructuring
const fancyObject = {
  a: "a",
  b: null,
  variable: [1, 2, 3],
};
const { a: aaa, b: bb, variable: v } = fancyObject;

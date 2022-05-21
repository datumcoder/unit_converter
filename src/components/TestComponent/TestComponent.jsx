import React from "react";
import "./TestComponent.scss";

const TestComponent = (props) => (
  <div className={`testContainer ${props.containerStyle}`}>
    <h1 className={props.titleStyle}>{props.title}</h1>
    {props.children}
  </div>
);

export default TestComponent;

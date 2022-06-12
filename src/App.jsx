import { useState } from "react";
import Card from "./components/Card/Card";
import "./App.scss";
import Container from "./components/Container/Container";
import { Switch } from "./components/Switch/Switch";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Switch />
        <Card variant={isActive} />
      </Container>
    </div>
  );
};

export default App;

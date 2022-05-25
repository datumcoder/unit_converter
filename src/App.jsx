import Card from "./components/Card/Card";
import "./App.scss";
import Container from "./components/Container/Container";

const App = () => (
  <div className="App">
    <Container>
      <Card variant={"dark"} />
    </Container>
  </div>
);

export default App;

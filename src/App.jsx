import Card from "./components/Card/Card";
import "./App.scss";
import Container from "./components/Container/Container";

const cardData = ["dark", "dark", "white", "white"];
const variants = cardData.map((data) => <Card variant={data} />);

const App = () => (
  <div className="App">
    <Container>{variants}</Container>
  </div>
);

export default App;

// TODO:
// - read more about props and props.children
// - read more about map function inside react component

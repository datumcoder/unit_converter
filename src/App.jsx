// import Card from "./components/Card/Card";
import "./App.scss";
// import Container from "./components/Container/Container";
import TestComponent from "./components/TestComponent/TestComponent";
import { testData } from "./components/TestComponent/TestComponent.data";

// const cardData = ["dark", "dark", "white", "white"];
// const variants = cardData.map((data) => <Card variant={data} />);

const getTestComponents = testData.map((data) => (
  <TestComponent
    containerStyle={data.styles.container}
    titleStyle={data.styles.title}
    title={data.title}
  >
    {data.content}
  </TestComponent>
));

const App = () => (
  <div className="App">
    {/* <Container>{variants}</Container> */}
    {getTestComponents}
  </div>
);

export default App;

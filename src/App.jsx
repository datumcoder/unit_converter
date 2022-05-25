// import Card from "./components/Card/Card";
import "./App.scss";
// import Container from "./components/Container/Container";
import TestComponent from "./components/TestComponent/TestComponent";
import { testData } from "./components/TestComponent/TestComponent.data";

// const cardData = ["dark", "dark", "white", "white"];
// const variants = cardData.map((data) => <Card variant={data} />);

const getTestComponents = testData.map(({ title, styles, content }) => (
  <TestComponent containerStyle={styles.container} titleStyle={styles.title} title={title}>
    {content}
  </TestComponent>
));

const App = () => (
  <div className="App">
    {/* <Container>{variants}</Container> */}
    {getTestComponents}
  </div>
);

export default App;

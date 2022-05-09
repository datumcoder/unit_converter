import TopRow from "./components/BottomRow/BottomRow";
import BottomRow from "./components/TopRow/TopRow";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BottomRow />
      <BottomRow />
      <TopRow />
      <TopRow />
      
    </div>
  );
}

export default App;

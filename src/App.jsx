import OutlineComponent from "./components/OutlineComponent";
import Todo from "./components/Todo";
import InlineComponent from "./components/inlineComponent";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Todo /> */}
      <InlineComponent />
      <OutlineComponent />
    </div>
  );
}

export default App;

import CounterShower from "./counter/counterShower";
import CounterAdd from "./counter/counterAdd";
import CounterDecrease from "./counter/counterDecrease";

function App() {
  return (
    <div>
      <CounterShower /> <CounterAdd />
      <CounterDecrease />
    </div>
  );
}

export default App;

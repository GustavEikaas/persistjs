import { useEffect, useState } from "react";
import "./App.css";
import { usePersistor } from "persistjs-react";
import { Observer } from "./Observer";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showCounter && <Counter />}
      <div>
        {showCounter ? (
          <button onClick={() => setShowCounter(false)}>Hide counter</button>
        ) : (
          <button onClick={() => setShowCounter(true)}>Show counter</button>
        )}
      </div>
      <div className="card">
        <Observer entry={"count"} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

const Counter = () => {
  const { commit, initialState } = usePersistor<number>("count");
  const [count, setCount] = useState(initialState ?? 0);

  useEffect(() => commit(count), [count]);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

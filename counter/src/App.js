import {useState} from "react"

function App() {
  const [value, setValue] = useState(0)
  return (
    <>
    <div>
      <h3>CounterApp</h3>
      <h3 id="counter-value">{value}</h3>
      <button id="increase-button" onClick={() => setValue(value + 1)}>Increment</button>
      <button id="decrease-button" onClick={() => setValue(value - 1)}>Decrement</button>
      <button id="reset-button" onClick={() => setValue(0)}>Reset</button>
    </div>
    
    </>
  );
}

export default App;

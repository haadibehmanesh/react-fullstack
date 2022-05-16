import { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(props.initialValue);

  return (
    <><h3>Count : {count}</h3>
      <button onClick={() => ((setCount(count + 1)))}>add </button>
      <button onClick={() => ((setCount(count - 1)))}>minus</button>
      <button onClick={() => ((setCount(props.initialValue)))}>reset</button>
    </>
  );
}

export default App;

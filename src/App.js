import { useState } from "react";

const App = (props) => {
  const [state, setState] = useState({
    count: props.initialValue,
    user: "Hadi"
  })



  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count : {state.count}</h3>
      <button onClick={() => ((setState({
        ...state,
        count: state.count + 1
      })))}>add </button>
      <button onClick={() => ((setState({ ...state, count: state.count - 1 })))}>minus</button>
      <button onClick={() => ((setState({ ...state, count: props.initialValue })))}>reset</button>
    </>
  );
}

export default App;

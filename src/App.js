import { forwardRef, useRef } from "react";

const App = () => {
  const inputText = useRef();
  const triggerHandler = () => {

    console.log(inputText.current.value)
  }
  return (

    <>
      <h1>Form:</h1>
      <InputComponent ref={inputText} />
      <button onClick={triggerHandler}>Trigger</button>
    </>
  );
}

const InputComponent = forwardRef((props, ref) => (

  <input type="text" ref={ref} />

)
)


export default App;

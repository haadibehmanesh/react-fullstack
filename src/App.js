import { Component, createRef } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.inputText = createRef();
  }
  state = {}
  triggerHandler = () => {

    console.log(this.inputText.current.value)
  }

  render() {
    return (
      <>
        <h1>Form:</h1>
        <input type="text" ref={this.inputText} />
        <button onClick={this.triggerHandler}>Trigger</button>
      </>

    );
  }
}

export default App;
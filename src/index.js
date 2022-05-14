import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

class App extends Component {
    render() {
        return (<>


            <h2><Header /></h2>

        </>);
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
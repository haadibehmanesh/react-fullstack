import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import NewsList from "./components/news_list";
import JSON from './db.json';


class App extends Component {
    state = {
        news: JSON,
        footerText: 'I am a happy footer'
    }
    render() {

        return (<>

            <Header />
            <NewsList news={this.state.news} />
            <Footer text={this.state.footerText} />

        </>);
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
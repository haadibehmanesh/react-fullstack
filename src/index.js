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
        const { news, footerText } = this.state;
        return (<>

            <Header />
            <NewsList news={news} />
            <Footer text={footerText} />

        </>);
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import NewsList from "./components/news_list";
import JSON from './db.json';


class App extends Component {
    state = {
        news: JSON,
        filtered: JSON,
        footerText: 'I am a happy footer'
    }
    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })

        this.setState({
            filtered
        });
    }

    render() {
        const { news, footerText, filtered } = this.state;
        return (<>

            <Header keywords={this.getKeywords} />
            <NewsList news={filtered} />
            <Footer text={footerText} />

        </>);
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
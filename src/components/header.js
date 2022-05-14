import React, { Component } from "react";


class Header extends Component {

    state = {
        'name': 'Hadi',
        'title': 'The title is',
        'keyword': '',
        'count': 0

    }
    addOne() {
        this.setState((state, props) => ({
            count: state.count + 1

        })
        )

    }
    inputChangeHandeler(event) {
        this.setState({
            keyword: event.target.value,

        })
    }

    render() {


        console.log(this.state)
        return (
            <>
                <header onClick={() => { console.log('i was clicked') }}>
                    LOGO
                </header>
                <input onChange={(e) => this.inputChangeHandeler(e)}>
                </input>
                <div>
                    {this.state.count}
                </div>
                <button onClick={() => { this.addOne() }}>
                    addOne
                </button>


            </>
        )

    }



}




export default Header;
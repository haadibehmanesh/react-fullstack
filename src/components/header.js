import React, { Component } from "react";


class Header extends Component {

    state = {
        active: true,
        name: 'Hadi',
        title: 'The title is',
        keyword: '',
        count: 0

    }
    addOne() {
        this.setState((state, props) => ({
            count: state.count + 1

        })
        )

    }
    inputChangeHandeler(event) {
        const value = event.target.value === '' ? true : false
        this.setState({
            active: value,
            keyword: event.target.value,

        })
    }

    render() {

        return (
            <>
                <header style={{ background: `${this.state.active ? 'blue' : 'red'}` }} >
                    <div className='logo'> LOGO</div>
                    <input onChange={(e) => this.inputChangeHandeler(e)}>
                    </input>
                    <div>
                        {this.state.count}
                    </div>
                    <button onClick={() => { this.addOne() }}>
                        addOne
                    </button>
                </header>


            </>
        )

    }



}




export default Header;
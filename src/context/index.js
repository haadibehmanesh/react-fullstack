import { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component {
    state = {
        user: [
            {
                id: 1, name: 'Hadi'
            },
            {
                id: 2, name: 'Ali'
            },
            {
                id: 3, name: 'Reza'
            }
        ]
    }
    render() {
        return (
            <>
                <MyContext.Provider value={this.state}>
                    {this.props.children}
                </MyContext.Provider>
            </>

        );
    }
}

export { MyContext, MyProvider };
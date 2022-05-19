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
        , active: true,

    }
    toggleActive = () => (

        this.setState({ active: !this.state.active })
    )
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    users: this.state.user,
                    active: this.state.active,
                    toggleActive: this.toggleActive,

                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>

        );
    }
}

export { MyContext, MyProvider };
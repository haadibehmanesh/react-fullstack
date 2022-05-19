import { Component } from "react";
import UserItem from "./userItem";
import { MyContext } from "../context";
class User extends Component {
    static contextType = MyContext;
    render() {

        return (
            <>
                <MyContext.Consumer>
                    {context => {

                        console.log(context)
                    }}
                </MyContext.Consumer>
                <UserItem />
            </>
        );
    }
}

export default User;


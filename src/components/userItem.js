import { useContext } from "react";
import { MyContext } from "../context";

const UserItem = () => {
    const context = useContext(MyContext);
    console.log(context)

    return (
        <>
            User Item
        </>
    );
}

export default UserItem;
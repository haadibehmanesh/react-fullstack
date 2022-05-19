import { useContext } from "react";
import { MyContext } from "../context";

const UserItem = () => {
    const context = useContext(MyContext);
    console.log(context)

    return (
        <>
            {context.active ?
                <div>
                    {context.users.map((item) => (
                        <h3 key={item.id}>
                            Name: {item.name}
                        </h3>
                    ))}

                </div>



                : null}
            <button onClick={context.toggleActive}>Toggle it</button>

        </>
    );
}

export default UserItem;
import React from "react";

const Title = () => {
    console.log('Title')
    return (
        <>
            <h1>My App</h1>
            <hr />
        </>
    )
}

export default React.memo(Title);
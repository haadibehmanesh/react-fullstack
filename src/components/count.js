import React from "react";
const Count = ({ count }) => {
    console.log('count')
    return (
        <>
            <h3>the count is: {count}</h3>
        </>
    )
}

export default React.memo(Count);
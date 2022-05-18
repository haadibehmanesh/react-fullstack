import React from "react";
const CountBtn = ({ handleCount }) => {
    console.log('CountBtn')
    return (
        <>
            <button onClick={handleCount}>
                Increment the count
            </button>
        </>
    )
}

export default React.memo(CountBtn);
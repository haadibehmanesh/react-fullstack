import React from "react";
const Age = ({ age }) => {
    console.log('age')
    return (
        <>
            <h3>the age is: {age}</h3>
        </>
    )
}

export default React.memo(Age);
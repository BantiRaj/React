import React from "react";

const Button = React.memo(({onClickHandler, children}) => {
    console.log("button rendered");
    return (
        <button onClick={onClickHandler}>
            {children}
        </button>
    )
})
export default Button;
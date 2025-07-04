import { Button } from "@mui/material";
import { useState } from "react";

const CounterApp = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }
    const decrementHandler = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    }
    const resetHandler = () => {
        setCount(0);
    }
    return (
        <>
            <h1>{count}</h1>
            <Button variant="contained" style={{marginRight: "4px"}} onClick={() => incrementHandler()}>Increment</Button>
            <Button variant="contained" style={{marginRight: "4px"}}  onClick={() => decrementHandler()}>Decrement</Button>
            <Button variant="contained" onClick={() => resetHandler()}>Reset</Button>
        </>
    )
}

export default CounterApp;
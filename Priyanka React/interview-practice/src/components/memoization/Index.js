import { useState, useCallback } from "react";
import Button from "./Button";
import MemoUse from "./MemoUse";

const Index = () => {
    const [count, setCount] = useState(0);

    // ✅ Using `useCallback` to prevent re-creating function on each render
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);



    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button onClickHandler={handleClick}>Click Me</Button>

            <MemoUse num="2" />
        </>
    );
};
export default Index;

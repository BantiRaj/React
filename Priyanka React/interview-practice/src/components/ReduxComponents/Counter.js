import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";

const Counter = () => {


    const {value} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
        <>
        {console.log("count", value)}
            <h1>
                {value}
            </h1>
            <Button variant="contained" onClick={incrementHandler}>Increment</Button>
            <Button variant="outlined" onClick={decrementHandler}>Decrement</Button>
        </>
    )
}
export default Counter;
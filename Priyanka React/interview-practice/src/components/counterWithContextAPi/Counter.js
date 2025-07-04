import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

const Counter = () => {

    const {count, setCount} = useContext(CounterContext);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count-1);
        }
    }

    return (
        <>
        {console.log("count", count)}
            <h1>{count}</h1>
            <Button variant='contained' onClick={increment}>Increment</Button>
            <Button variant='outlined' onClick={decrement}>Decrement</Button>
        </>
    )
}

export default Counter
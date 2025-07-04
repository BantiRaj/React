import React, { useEffect, useState } from 'react'

const StopwatchOrTimer = () => {

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000); // Update every second
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning])

    const format = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);;
        const second = seconds % 60;

        return `${hours}:${minutes}:${second}`;
    }

    const start = () => {
        setIsRunning(true);
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setIsRunning(0);
        setTimer(0);
    }

    return (
        <div>
            <h1>{format(timer)}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default StopwatchOrTimer
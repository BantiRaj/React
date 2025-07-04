import "./index.css";
import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    }

    const handleEqual = () => {
        setInput(eval(input).toString());
    }

    const handleClear = () => {
        setInput('');
    }

    return (
        <div className="calculator">
            <div className="display">{input || 0}</div>
            <div className="buttons">
                <button onClick={() => handleClear()} className="clear">C</button>
                <button onClick={() => handleInput('%')}>%</button>
                <button onClick={() => handleInput('X')}>X</button>
                <button onClick={() => handleInput('/')}>/</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('8')}>x</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('0')}className="zero">0</button>
                <button onClick={() => handleInput('.')}>.</button>
                <button onClick={() => handleEqual()} className="equals">=</button>
            </div>
        </div>
    )
}

export default Calculator;
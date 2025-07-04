import React, { useContext, useState } from 'react'
import "./index.css";
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

   const navigate = useNavigate();

    const {login} = useContext(UserContext);
    const [state, setState] = useState( {
        name: '',
        email: '',
        password: ''
    });

    const loginButton = () => { 
        login(state);

        navigate("/dashboard");
    }

    const setStateHandle = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return (
        <div className='container'>
            <div><h2>Login</h2></div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name: </label><input type="text" name="name" value={state?.name || ''} onChange={(e) => setStateHandle(e)}></input>
                <label>Email: </label><input type="text" name="email" value={state?.email || ''} onChange={(e) => setStateHandle(e)}></input>
                <label>Password: </label><input type="password" name="password" value={state?.password || ''} onChange={(e) => setStateHandle(e)}></input>
                <button onClick={loginButton}>Login</button>
            </form>
        </div>
    
  )
}

export default LoginForm
import React, { useState } from 'react'

const SimpleForm = () => {
    const [state, setState] = useState({});
    const [formData, setFormData] = useState();

    const onChange = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]: value});
    }

    const buttonClick = (e) => {
        e.preventDefault();
        setFormData(state)
    }

    return (
            <form>
                Name: <input type="text" value={state?.name} name="name" onChange={(e) => onChange(e)}/>
                Email: <input type="email" value={state?.email} name="email" onChange={(e) => onChange(e)}/>
                paaword: <input type="password" value={state?.password} name="password" onChange={(e) => onChange(e)}/>
                <button onClick={(e) => buttonClick(e)}>Submit</button>
                <p>name: {formData?.name || ""}</p>
                <p>email: {formData?.email || ""}</p>
            </form>
  
    )
}

export default SimpleForm
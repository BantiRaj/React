import React, { useState } from 'react';
import "./index.css";

function DynamicForm() {
    const [formData, setFormData] = useState([{
        id: new Date().getMilliseconds(),
        value: ""
    }]);

    const onChangeHandler = (e, index) => {
        let updatedData = [...formData];
        updatedData[index].value = e.target.value;

        setFormData(updatedData);
    }

    const addInput = () => {
        setFormData([
            ...formData,
            {
                id: new Date().getMilliseconds(),
                value: ""
            }
        ]);
    }

    const removeInput = (index) => {
        let updatedData = [...formData];
        updatedData.splice(index, 1);
        setFormData(updatedData);
    }

  return (
    <div className='container'>
        {
            formData && formData.map((item, index) => (
                <span key={item?.id}><input type="text" onChange={(e) => onChangeHandler(e, index)} value={item?.value}></input><button onClick={(e) => removeInput(index)}>Remove</button></span>
            ))
        }
        <br />
        <button onClick={addInput}>Add Field</button>
    </div>
  );
}

export default DynamicForm;
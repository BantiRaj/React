import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import "./index.css";


const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        phone: "",
        email: "",
        insuranceProvider: "",
        policyNumber: "",
        medicalHistory: [],
        familyMedicalHistory: "no",
        favLanguage: "",
    });

    const onChangeHandler = (e) => {
        const {name, value, checked, type} = e?.target;
        console.log("e?.target", e?.target.name, e?.target)
        if(type === 'radio') {
            setFormData({...formData, [name]: value });
        } else {
            setFormData({...formData, [name]: checked ? [...formData[name], value]: value });
        }
    }

    const submitHandler = () => {
        console.log("formData", formData);
    }

    const prevState = () => {
        setCurrentStep(currentStep - 1)
    }

    const nextState = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className='form-container'>
            <form onSubmit={(e) => e.preventDefault(e)}>

                {
                    (currentStep == 1) && 
                    <FirstStep 
                        nextState={nextState}
                        onChangeHandler={onChangeHandler}
                        formData={formData}
                    />
                }
                { 
                    (currentStep == 2) && 
                    <SecondStep
                        nextState={(state) => nextState(state)} 
                        onChangeHandler={(e) => onChangeHandler(e)}
                        formData={formData}
                        prevState={prevState}
                    />
                }
                { 
                    (currentStep == 3) && 
                    <ThirdStep
                        submitHandler={() => submitHandler()}
                        onChangeHandler={(e) => onChangeHandler(e)}
                        formData={formData}
                        prevState={prevState}
                    />
                }
             
            </form>
        </div>
    )
}

export default MultiStepForm
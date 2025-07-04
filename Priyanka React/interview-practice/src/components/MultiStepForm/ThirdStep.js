import React from 'react'

const ThirdStep = ({ submitHandler, prevState, formData, onChangeHandler }) => {
    return (
        <div className="third-step">
            <h3>Medical History</h3>
            <div className="medical-history">
                {console.log(formData)}
                <div className='checkboxs'><input type="checkbox" name="medicalHistory" defaultChecked={formData?.medicalHistory.includes("Hypertension")} value={"Hypertension"} onChange={onChangeHandler} /><label>Hypertension </label></div>
                <div className='checkboxs'><input type="checkbox" name="medicalHistory" defaultChecked={formData?.medicalHistory.includes("Diabetes")} value={"Diabetes"} onChange={onChangeHandler}  /><label>Diabetes</label></div>
                <div className='checkboxs'><input type="checkbox" name="medicalHistory" defaultChecked={formData?.medicalHistory.includes("Cholesterol")} value={"Cholesterol"} onChange={onChangeHandler}  /><label>High Cholesterol</label></div>
            </div>

            <label>Family History of Heart Disease</label>
            <select className="select-history" name="familyMedicalHistory"
                value={formData.familyMedicalHistory}
                onChange={onChangeHandler}
>
                <option value="yes">Nes</option>
                <option value="no">No</option>
            </select>

            <div className='radio-container'>
                <div className='radios'><input type="radio" id="html" name="favLanguage" value="HTML" checked={formData?.favLanguage === 'HTML'} onChange={onChangeHandler}/>
                    <label htmlFor="html">HTML</label></div>
                <div className='radios'><input type="radio" id="css" name="favLanguage" value="CSS" checked={formData?.favLanguage === 'CSS'} onChange={onChangeHandler}/>
                    <label htmlFor="css">CSS</label></div>
                <div className='radios'><input type="radio" id="javascript" name="favLanguage" value="JavaScript" checked={formData?.favLanguage === 'JavaScript'} onChange={onChangeHandler} />
                    <label htmlFor="javascript">JavaScript</label></div>
            </div>

            <button className='previous' onClick={prevState}>previous</button>
            <button className='next' onClick={() => submitHandler()}>Submit</button>
        </div>
    )
}

export default ThirdStep
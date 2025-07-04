import React from 'react'

const SecondStep = ({nextState, prevState, onChangeHandler, formData}) => {
  return (
    <div className="first-step">
        <h3>Insurance Details</h3>
        <label>Insurance Provider: </label><input type="text" name="insuranceProvider" value={formData?.insuranceProvider} onChange={onChangeHandler} />
        <label>Policy Number: </label><input type="text" name="policyNumber" value={formData?.policyNumber} onChange={onChangeHandler} />
        <div className="both-btn">
            <button className='previous' onClick={prevState}>Previous</button>
            <button className='next' onClick={nextState}>Next</button>
        </div>
    </div>
  )
}

export default SecondStep
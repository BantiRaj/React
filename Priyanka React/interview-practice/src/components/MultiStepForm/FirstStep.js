import React from 'react'

const FirstStep = ({nextState, onChangeHandler, formData}) => {
  return (
    <div className="first-step">
        <h3>Personal information</h3>
        <label>Full Name: </label><input type="text" name="fullName" value={formData?.fullName || ''} onChange={onChangeHandler} />
        <label>Date of Birth: </label><input type="date" name="dob"  value={formData?.dob || ''} onChange={onChangeHandler} />
        <label>Phone: </label><input type="text" name="phone"  value={formData?.phone || ''} onChange={onChangeHandler} />
        <label>Email: </label><input type="text" name="email"  value={formData?.email || ''} onChange={onChangeHandler} />
        <button className='next' onClick={nextState}>Next</button>
    </div>
  )
}

export default FirstStep
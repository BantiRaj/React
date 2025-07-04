import React from 'react';

const Modal = (props) => {
    const{open, handleClose} = props;

    if(!open) return null;

    return (
        <div className="overlay">
            <div className="modal-container">
                <div className='header'>
                    <h4>Title</h4>
                    <h4 onClick={handleClose} className="close">X</h4>
                </div>
                <div className="content">
                    You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..
                    You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..
                    You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..You can add your content here..

                </div>
                <div className="footer">
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
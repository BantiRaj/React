import React, { useState } from 'react';
import "./modal.css";
import Modal from './Modal';

const Container = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
        <button onClick={() => handleOpen()}>open Modal</button>
        <Modal
          open={open}
          handleClose={handleClose}
        />
    </div>
  )
}

export default Container
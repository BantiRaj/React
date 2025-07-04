import React, { useState } from 'react';
import "./index.css";

const FileUpload = () => {
    const [images, setImage] = useState([]);

    const onChangeHandler = (e) => {
        let selectedFiles = e.target.files[0];

        // const fileArray = Array.from(selectedFiles).map(file => {
        //     return { file, preview: URL.createObjectURL(file) };
        //   });
        setImage([...images, {file: selectedFiles, url: URL.createObjectURL(selectedFiles)}])
    }


  return (
    <div className='container'>
        <div><input type="file" onChange={(e) => onChangeHandler(e)} /></div>
        <div>
        {
            images?.length > 0 && images.map((file, index) => (
                <img src={file.url} alt={`image${index}`} key={index} />
            ))
        }
        </div>

    </div>
  )
}

export default FileUpload
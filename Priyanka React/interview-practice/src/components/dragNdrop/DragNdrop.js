import React, { useState } from 'react';
import './index.css';

const DragNdrop = () => {

    const [items, setItems] = useState([
        { id: '1', content: 'Item 1' },
        { id: '2', content: 'Item 2' },
        { id: '3', content: 'Item 3' },
        { id: '4', content: 'Item 4' },
    ]);
    const [draggedIndex, setDraggedIndex] = useState("");

    const onDragStart = (index) => {
        setDraggedIndex(index);
    }
g
    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, index) => {
        e.preventDefault();
        
        let updatedItems = [...items];
        let draggedItem = updatedItems[draggedIndex];
        
        updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(index, 0, draggedItem);

        setItems(updatedItems);
        setDraggedIndex("");

    }
    return (
        <div className='drag-container'>
            <ul>
                {
                    items.map((value, index) => (
                        <li 
                            key={value.id}
                            draggable
                            onDragStart={() => onDragStart(index)}
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, index)}
                        >
                            {value.content}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}



export default DragNdrop
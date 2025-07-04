import React, { useEffect, useState } from 'react';
import "./index.css";

const TodoApp = () => {
    const todaoFromLocal = localStorage.getItem("todos");

    const [todoList, setTodoList] = useState((todaoFromLocal?.length > 0) ? JSON.parse(todaoFromLocal) : []);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState("");
  


    useEffect(() => {
        console.log("useEffect todoList", todoList)
        if (todoList?.length > 0) {
            setTodoList(todoList);
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
    }, [todoList]);

    const addTodoClick = () => {
        if(isEdit) {
            const value = [...todoList];
            value[editIndex].title = title;
            setTodoList(value);
        } else {
            setTodoList([...todoList, {
                id: Date.now(),
                title: title,
                description: description,
                completed: false
            }]);
        }

        setTitle("");
        setIsEdit(false);
        setEditIndex("");
    }

    const deleteTodo = (index) => {
        let newList = todoList.filter((obj, i) => i !== index)
        setTodoList(newList);
    }

    const completeTodo = (value, index) => {
        todoList[index].completed = value;
        setTodoList(todoList);
        localStorage.setItem("todos", JSON.stringify(todoList));
    }

    const editTodo = (index) => {
        setIsEdit(true);
        setEditIndex(index);
        setTitle(todoList[index].title);
    }


    return (
        <>

            <div className='add-todo'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="add-btn" onClick={() => addTodoClick()}>{isEdit ? "Edit" : "Add"}</button>
            </div>
            <div className='todo-list'>
                {console.log(todoList)}
                <ul>
                    {
                        todoList?.length > 0 && todoList.map((list, index) =>
                            <li key={list?.id}><input type={"checkbox"} defaultChecked={list.completed} onChange={(e) => completeTodo(e.target.checked, index)} />
                                <span className={list.completed ? "strike" : ""}>{list?.title}</span>
                                <button onClick={() => deleteTodo(index)}>Delete</button>
                                <button onClick={() => editTodo(index)}>Edit</button>
                                
                            </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoApp
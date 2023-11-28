import React, { useState } from 'react';
import './TaskForm.scss';

const TaskForm = () => {

    const [popup, setPopup] = useState(false);
    const [priority, setPriority] = useState('Low');
    const [title, setTitle] = useState(''); 
    const [descrip, setDescrip] = useState('');

    const handlePopup = () => {
        popup === false ? setPopup(true) : setPopup(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // DEFINING A NEW TASK OBJECT
        const newTask = {
            id: Date.now(),
            taskName: title,
            taskDescrip: descrip,
            checked: false,
            priority: priority,
            time: new Date().toLocaleString()
        }

        // dispatch(addTodo(newTask)) // DISPATCHING THE NEW TASK TO REDUX STORE

        setTitle('') // SETTING INPUT TO EMPTY AFTER SUCCESSFUL TASK ADDITION
        setDescrip('')
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Enter your task name</label>
                <input type='text' value={title} onChange={(e) => { setTitle(e.target.value)}} required></input>

                <label>Enter your task Description</label>
                <textarea rows={3} cols={50} value={descrip} onChange={(e) => { setDescrip(e.target.value)}}  style={{resize: 'none'}}required></textarea>

                <label>Choose priority</label>
                <div className="popupContainer">
                    <div className="activePriority" onClick={handlePopup}>
                        <span>{priority}</span>
                    </div>
                    <div className={`priorityList ${popup === true ? 'active' : ''}`}>
                        <span onClick={()=>setPriority('Low')}>Low</span>
                        <span onClick={()=>setPriority('Medium')}>Medium</span>
                        <span onClick={()=>setPriority('High')}>High</span>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TaskForm
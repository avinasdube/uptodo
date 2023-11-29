import React, { useState } from 'react';
import './TaskForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '../../reducers/todoReducer';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { taskid } = useParams();
    const targetId = taskid ? taskid.substring(1) : null;

    const tasks = useSelector(state => state.todos.todos);
    const targetTask = tasks.find((task) => task.id === parseInt(targetId))

    const [popup, setPopup] = useState(false);

    const [title, setTitle] = useState(targetTask ? targetTask.taskName : '');
    const [descrip, setDescrip] = useState(targetTask ? targetTask.taskDescrip : '');
    const [priority, setPriority] = useState(targetTask ? targetTask.priority : 'Low');

    const handlePopup = () => {
        popup === false ? setPopup(true) : setPopup(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // DEFINING A NEW TASK OBJECT
        const newTask = {
            id: targetTask ? targetTask.id : Date.now(),
            taskName: title,
            taskDescrip: descrip,
            checked: targetTask ? targetTask.checked : false,
            priority: priority,
            time: targetTask ? targetTask.time : new Date().toLocaleString(),
        }

        if (targetTask) {
            dispatch(editTodo(newTask)) // DISPATCHING THE NEW TASK TO REDUX STORE
        } else {
            dispatch(addTodo(newTask)) // DISPATCHING THE NEW TASK TO REDUX STORE
        }

        setTitle('') // SETTING INPUT TO EMPTY AFTER SUCCESSFUL TASK ADDITION
        setDescrip('')
        navigate('/')
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Enter your task name</label>
                <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} required></input>

                <label>Enter your task Description</label>
                <textarea rows={3} cols={50} value={descrip} onChange={(e) => { setDescrip(e.target.value) }} style={{ resize: 'none' }} required></textarea>

                <label>Choose priority</label>
                <div className="popupContainer">
                    <div className="activePriority" onClick={handlePopup}>
                        <span>{priority}</span>
                    </div>
                    <div className={`priorityList ${popup === true ? 'active' : ''}`}>
                        <span onClick={() => setPriority('Low')}>Low</span>
                        <span onClick={() => setPriority('Medium')}>Medium</span>
                        <span onClick={() => setPriority('High')}>High</span>
                    </div>
                </div>
                <button type='submit'>{targetTask ? "Save Edit" : "Create"}</button>
            </form>
        </div>
    )
}

export default TaskForm
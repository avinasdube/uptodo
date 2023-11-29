import React from 'react';
import './SingleTask.scss';
import { checkTodo, removeTodo } from '../../reducers/todoReducer';
import { useDispatch } from 'react-redux';

import edit from '../../assets/edit.png';
import remove from '../../assets/delete.png';
import { Link } from 'react-router-dom';

const SingleTask = ({ tasks }) => {

    const dispatch = useDispatch();

    // A FUNCTION TO HANDLE TASK CHECKING STATUS
    const handleCheck = (id) => {
        dispatch(checkTodo(id))
    }

    return (
        <>
            {tasks.length === 0 ?
                <div style={{ textAlign: 'center' }}>No tasks found</div> :
                tasks.map((task) => (
                    <div className="taskContainer" key={task.id}>
                        <div className="left">
                            <input type='checkbox' onChange={() => handleCheck(task.id)} checked={task.checked}></input>
                            <div className='details'>
                                <div className="title">{task.taskName}
                                    {task.priority === 'Low' ?
                                        <div className="priority" style={{ backgroundColor: 'lightgreen', color: 'green' }}>{task.priority}</div> :
                                        task.priority === 'Medium' ?
                                            <div className="priority" style={{ backgroundColor: 'lightyellow', color: 'orange' }}>{task.priority}</div> :
                                            <div className="priority" style={{ backgroundColor: 'pink', color: 'red' }}>{task.priority}</div>}</div>
                                <div className="descrip">{task.taskDescrip}</div>
                            </div>
                        </div>
                        <div className="right">
                            <Link className='link' to={`/edit/:${task.id}`}><img src={edit} alt=''></img></Link>
                            <img src={remove} alt='' onClick={()=>dispatch(removeTodo(task.id))}></img>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SingleTask;
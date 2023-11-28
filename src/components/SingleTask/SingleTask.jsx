import React from 'react';
import './SingleTask.scss';

const SingleTask = ({ tasks }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <div className="taskContainer" key={task.id}>
                        <input type='checkbox'></input>
                        <div className='details'>
                            <div className="title">{task.taskName}<div className="priority">{task.priority}</div></div>
                            <div className="descrip">{task.taskDescrip}</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SingleTask;
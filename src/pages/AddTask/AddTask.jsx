import React from 'react'
import './AddTask.scss';
import TaskForm from '../../components/TaskForm/TaskForm'

const AddTask = () => {
  return (
    <div className="addTaskContainer">
      <div className="heading">Create a new task</div>
      <TaskForm />
    </div>
  )
}

export default AddTask
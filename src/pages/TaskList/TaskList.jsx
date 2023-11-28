import React from 'react';
import './TaskList.scss';
import SingleTask from '../../components/SingleTask/SingleTask';

const TaskList = () => {

  const tasks = [
    {
      id: 1,
      taskName: "Write project documentation",
      taskDescrip: "Write the documentation for ongoing task 'UpTodo' before Thursday.",
      priority: "High",
    },
    {
      id: 2,
      taskName: "Visit Akshardham",
      taskDescrip: "Go to visit Akshardham mandir in Delhi",
      priority: "Low",
    },
    {
      id: 3,
      taskName: "Prepare for interview",
      taskDescrip: "Start preparing for the upcoming interview at AulaCube",
      priority: "Medium",
    }
  ]

  return (
    <div className="tasklistContainer">
      <SingleTask tasks={tasks} />
    </div>
  )
}

export default TaskList;
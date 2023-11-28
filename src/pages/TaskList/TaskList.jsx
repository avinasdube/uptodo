import React from 'react'
import SingleTask from '../../components/SingleTask/SingleTask'

const TaskList = () => {

  const tasks = [
    {
      id: 1,
      taskName: "Write project documentation",
      taskDescrip: "Write the documentation for ongoing task 'UpTodo' before Thursday.",
      priority: "",
    },
    {
      id: 2,
      taskName: "Visit Akshardham",
      taskDescrip: "Go to visit Akshardham mandir in Delhi",
      priority: "",
    },
    {
      id: 3,
      taskName: "Prepare for interview",
      taskDescrip: "Start preparing for the upcoming interview at AulaCube",
      priority: "",
    }
  ]

  return (
    <div className="tasklistContainer">
      <SingleTask tasks={tasks} />
    </div>
  )
}

export default TaskList;
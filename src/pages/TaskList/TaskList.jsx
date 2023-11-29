import React, { useState } from 'react';
import './TaskList.scss';
import SingleTask from '../../components/SingleTask/SingleTask';
import { useDispatch, useSelector } from 'react-redux';

import filter from '../../assets/filter.png';
import { setActiveFilter } from '../../reducers/filterReducer';

const TaskList = () => {

  const [popup, setPopup] = useState(false);

  // A FUNCTION TO HANDLE POPUP DROPDOWN
  const handlePopup = () => {
    popup === true ? setPopup(false) : setPopup(true)
  }

  const dispatch = useDispatch();

  // GETTING TASKLIST FROM REDUX STATE REDUCER
  const tasks = useSelector(state => state.todos.todos);
  const activeFilter = useSelector(state => state.filtars.activeFilter);

  // FILTERING THE TASKLIST IF ANY FILTERS ARE SELECTED ELSE RETURN ALL TASKS
  const filteredTasks = activeFilter === "All Tasks" ? tasks : tasks.filter((task) => task.priority === activeFilter)

  return (
    <div className="tasklistContainer" data-testid="task-list">
      <div className="filters">
        <div className={`activeFilter ${popup === true ? 'active' : ''}`} onClick={handlePopup}>
          <img src={filter} alt=''></img><span>{activeFilter}</span>
        </div>
        <div className={`filterOptions ${popup === true ? 'active' : ''}`}>
          <span onClick={() => dispatch(setActiveFilter('Low'))}>Low</span>
          <span onClick={() => dispatch(setActiveFilter('Medium'))}>Medium</span>
          <span onClick={() => dispatch(setActiveFilter('High'))}>High</span>
          <span onClick={() => dispatch(setActiveFilter('All Tasks'))}>All Tasks</span>
        </div>
      </div>
      <SingleTask tasks={filteredTasks} />
    </div>
  )
}

export default TaskList;
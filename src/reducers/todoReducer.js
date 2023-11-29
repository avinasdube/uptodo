import { createSlice } from '@reduxjs/toolkit';

// FETCHING TASKS FROM localStorage TO INITIALIZE 'todos'
const getInitialTodos = () => {
    return JSON.parse(localStorage.getItem("todolist")) || [];
}

// SETTING INITIALSTATE FOR 'todosSlice'
const initialState = {
    todos: getInitialTodos(),
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            // FETCHING 'todolist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            let storageTask;

            if (localStorage.getItem("todolist") === null) {
                storageTask = [];
            } else {
                storageTask = JSON.parse(localStorage.getItem("todolist"))
            }

            // PUSHING THE NEW TASK TO 'storageTask' ARRAY
            storageTask.push(action.payload)

            // UPDATING THE 'todolist' ARRAY OF localStorage WITH NEW TASK
            localStorage.setItem("todolist", JSON.stringify(storageTask))

            // UPDATING THE LOCAL STATE WITH NEW TASK
            state.todos.push(action.payload)
        },
        editTodo: (state, action) => {

            // GETTING 'targetTask' FROM PAYLOAD
            const targetTask = action.payload;

            // FETCHING 'todolist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            const storageTask = JSON.parse(localStorage.getItem("todolist"));

            // RE-SAVING/EDITING THE TARGETTED TASK
            const editedTasklist = storageTask.map(task => {
                if (task.id.toString() === targetTask.id.toString()) {// important to convert it to string
                    return {
                        id: targetTask.id,
                        taskName: targetTask.taskName,
                        taskDescrip: targetTask.taskDescrip,
                        checked: targetTask.checked,
                        priority: targetTask.priority,
                        time: targetTask.time,
                    }
                }
                return task;
            })

            // UPDATING THE localStorage
            localStorage.setItem("todolist", JSON.stringify(editedTasklist));

            // UPDATING LOCAL STATE
            state.todos = editedTasklist;
        },
        checkTodo: (state, action) => {
            const id = action.payload;

            // FETCHING 'todolist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            const storageTask = JSON.parse(localStorage.getItem("todolist"))

            // CHECKING/UNCHECKING THE TARGETTED TASK 
            const updatedTasklist = storageTask.map(task => {
                if (task.id.toString() === id.toString()) { // important to convert it to string
                    return {
                        ...task,
                        checked: !task.checked, // Toggle the checked state
                    };
                }
                return task;
            });

            // UPDATING THE localStorage
            localStorage.setItem("todolist", JSON.stringify(updatedTasklist));

            // UPDATING LOCAL STATE
            state.todos = updatedTasklist
        },
        removeTodo: (state, action) => {
            const id = action.payload;

            // FETCHING 'todolist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            const storageTasks = JSON.parse(localStorage.getItem("todolist"))

            // FILTERING 'storageTasks' HAVING NO TASK WITH 'task.id === id'
            const filteredTasks = storageTasks.filter(task => task.id !== id)

            // UPDATING THE localStorage
            localStorage.setItem("todolist", JSON.stringify(filteredTasks));

            // UPDATING THE LOCAL STATE
            state.todos = filteredTasks;
        }
    }
})

export const { addTodo, editTodo, checkTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
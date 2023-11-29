import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import filterReducer from './reducers/filterReducer';

// CONFIGURING STORE
const store = configureStore({
    reducer: {
        todos: todoReducer,
        filtars: filterReducer
    }
})

export default store;
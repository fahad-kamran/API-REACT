import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from './Reducer/getTodos';
export default configureStore({
    reducer: {
        todos: TodosReducer,
    }
})
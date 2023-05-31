// getTodos reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../AXIOS";
// Create an async thunk action
export const fetchTodoItems = createAsyncThunk(
    'items/fetch',
    async () => {
        const response = await API.get('/todos');
        return response.data;
    });

export const TodoSlice = createSlice({
    name: 'TODOS',
    initialState: [],
    reducers: {
        // other reducer actions
    },
    extraReducers: (builder) => {
        // Handle the fetchItems fulfilled action
        builder.addCase(fetchTodoItems.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default TodoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    status: 'idle',
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
           state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, clearCompleted, setStatus } = todoSlice.actions
export default todoSlice.reducer

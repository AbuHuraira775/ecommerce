import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlices'

function TodoPage() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const [task, setTask] = React.useState('')

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = () => {
        const newTodo = {
            id: Date.now(),
            task: task,
            completed: false
        }
        dispatch(addTodo(newTodo))
        setTask('')
    }
    console.log(todos)
    return (
        <>
            <h1>Todo Page</h1>
            <p>This page is private.</p>
            <input type="text" placeholder="Add a task" value={task} onChange={handleInput} /> <br />
            <button type='submit' onClick={handleSubmit}>Add Task</button>

            <ul>
                {todos.length > 0 && todos.map((todo, index) => (
                    <li key={index}>{todo.task}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoPage
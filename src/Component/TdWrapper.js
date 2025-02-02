import React, {useState} from 'react'
import { TdForm } from './TdForm'
import {v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'

uuidv4();

// TdWrapper component manages the list of todos
 export const TdWrapper = () => {
    const [todos, setTodos] = useState([])

    // Function to add a new todo item
    const addTodo = todo => {
        setTodos([...todos,
             {id : uuidv4(), task :todo ,completed:false,isEditing:false}])
    }
    // Function to toggle the completion status of a todo item
    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
    }
    // Function to delete a todo item by its ID
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    return(
        <div className='TodoWrapper'>
            <h1>To do List</h1>
            <h4>Click it to mark it as done</h4>
            <TdForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index}
                toggleComplete ={toggleComplete}
                deleteTodo ={deleteTodo}
                />  
            ))}
            
        </div>
    )
 }
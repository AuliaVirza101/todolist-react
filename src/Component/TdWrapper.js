import React, {useState} from 'react'
import { TdForm } from './TdForm'
import {v4 as uuidv4 } from 'uuid';

uuidv4();

// TdWrapper component manages the list of todos
 export const TdWrapper = () => {
    const [todos, setTodos] = useState([])

    // Function to add a new todo item
    const addTodo = todo => {
        setTodos([...todos,
             {id : uuidv4(), task :todo ,completed:false,isEditing:false}])
    }
    return(
        <div className='TodoWrapper'>
            <TdForm addTodo={addTodo}/>
            
        </div>
    )
 }
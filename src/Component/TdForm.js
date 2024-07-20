import React, {useState} from 'react';


export const TdForm = ({addTodo}) => {
    // State to keep track of the input value
    const [value, setValue] = useState("");

    // Handle form submission
    const handleSubmit = e =>{
        e.preventDefault();// Prevent the default form submission behavior

        addTodo(value);// Add the new todo item

        setValue('');// Reset the input field
    }
   return(
       <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' className='todo-input' value={value} placeholder="Type in new Task" 
        onChange={(e) => setValue(e.target.value)}/>
      
        <button type='submit' className='todo-btn'>Add</button>
      
       </form>
   )
}
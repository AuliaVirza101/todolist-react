import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// Todo component displays an individual todo item
export const Todo = ({task,toggleComplete,deleteTodo}) => {
    return (
      <div className='Todo'>
        {/* displaying task */}
       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
       <div>
        {/* delete button */}
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    )
}
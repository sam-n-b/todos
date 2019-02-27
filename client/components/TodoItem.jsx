import React from 'React'

function TodoItem(props){
    return(
        <div className='todo-item'>
        <span>Todo: {props.todo.task}</span>
        <span>      Category: {props.todo.category}</span>
        <span>      Priority: {props.todo.priority}</span>
        <span>      Due: {props.todo.due_at}</span>
        <br/>
        </div>
    )
}

export default TodoItem
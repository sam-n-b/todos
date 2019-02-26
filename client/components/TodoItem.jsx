import React from 'React'

function TodoItem(props){
    return(
        <div>{props.todo.task}</div>
    )
}

export default TodoItem
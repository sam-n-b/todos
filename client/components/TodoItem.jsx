import React from 'React'
import {connect} from 'react-redux'
import{toggleTodo} from '../actions'

function TodoItem(props){
    
    return(
        
        <div className={props.todo.is_complete?'todo-item completed':'todo-item'}>
        <span>Todo: {props.todo.task}</span>
        <span>      Category: {props.todo.category}</span>
        <span>      Priority: {props.todo.priority}</span>
        <span>      Due: {props.todo.due_at}   </span>
        <button>complete</button>
        <br/>
        </div>
    )
}

export default connect()(TodoItem)

//this.props.dispatch(toggleTodo(7, true)) USE THIS DISPATCH IN BUTTON
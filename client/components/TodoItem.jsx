import React from 'React'
import {connect} from 'react-redux'
import{toggleTodo, deleteTodo} from '../actions'
import{getTodos} from '../actions'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
    }
    handleClickComplete(e){
        this.props.dispatch(toggleTodo(this.props.todo.id, !this.props.todo.is_complete))
        this.props.dispatch(getTodos())
    }
    handdleClickDelete(e){
        this.props.dispatch(deleteTodo(this.props.todo.id))
        this.props.dispatch(getTodos())
    }
   render(){
    return(
        
        <div className={this.props.todo.is_complete?'todo-item completed':'todo-item'}>
        <span>Todo: {this.props.todo.task}</span>
        <span>      Category: {this.props.todo.category}</span>
        <span>      Priority: {this.props.todo.priority}</span>
        <span>      Due: {this.props.todo.due_at}   </span>
        <button onClick={this.handleClickComplete.bind(this)}>complete</button>
        <button onClick={this.handdleClickDelete.bind(this)}>remove</button>
        <br/>
        </div>
    )
   } 

}

export default connect()(TodoItem)

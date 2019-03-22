import React from 'React'
import {connect} from 'react-redux'
import{toggleTodo, deleteTodo, getTodos, getTodosSearch} from '../actions'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
    }
    handleClickComplete(e){
        this.props.dispatch(toggleTodo(this.props.todo.id, !this.props.todo.is_complete))
        this.props.dispatch(getTodos())
        this.props.dispatch(getTodosSearch(this.props.todosSearchValue))
    }
    handdleClickDelete(e){
        this.props.dispatch(deleteTodo(this.props.todo.id))
        this.props.dispatch(getTodos())
        this.props.dispatch(getTodosSearch(this.props.todosSearchValue))
    }
   render(){
    return(
        
        <div className={this.props.todo.is_complete?'todo-item completed':'todo-item'}>
        <span><b>Todo: </b>{this.props.todo.task}</span>
        <span>      <b>Category: </b>{this.props.todo.category}</span>
        <span>      <b>Priority: </b>{this.props.todo.priority}</span>
        <span>      <b>Due: </b>{this.props.todo.due_at}   </span>
        <img className={this.props.todo.is_complete?'priority-img priority-img-completed':'priority-img'} src={`/images/priority${this.props.todo.priority}.png`}/>
        <button onClick={this.handleClickComplete.bind(this)}>complete</button>
        <button onClick={this.handdleClickDelete.bind(this)}>remove</button>
        <br/>
        </div>
    )
   } 

}
function mapStateToProps(state){
    return {todosSearchValue: state.todosSearchValue}
}
export default connect(mapStateToProps)(TodoItem)

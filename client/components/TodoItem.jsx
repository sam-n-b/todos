import React from 'React'
import {connect} from 'react-redux'
import{toggleTodo, deleteTodo, getTodos, getTodosSearch, getTodosPriority, getTodosIsComplete} from '../actions'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
    }
    handleClickComplete(e){
        const dispatch = this.props.dispatch
        dispatch(toggleTodo(this.props.todo.id, !this.props.todo.is_complete))
        dispatch(getTodos())
        dispatch(getTodosPriority(this.props.todosPriorityValue))
        dispatch(getTodosIsComplete(this.props.todosCompletedValue))
        this.props.todosSearchValue.length >0 && dispatch(getTodosSearch(this.props.todosSearchValue))
    }
    handleClickDelete(e){
        const dispatch = this.props.dispatch
        dispatch(deleteTodo(this.props.todo.id))
        dispatch(getTodos())
        dispatch(getTodosPriority(this.props.todosPriorityValue))
        dispatch(getTodosIsComplete(this.props.todosCompletedValue))
        this.props.todosSearchValue.length >0 && dispatch(getTodosSearch(this.props.todosSearchValue))
    }
   render(){
       const todo = this.props.todo
    return(
        <div className={todo.is_complete?'todo-item completed':'todo-item'}>
        <span><b>Todo: </b>{todo.task}</span>
        <span>      <b>Category: </b>{todo.category}</span>
        <span>      <b>Priority: </b>{todo.priority}</span>
        <span>      <b>Due: </b>{todo.due_at}   </span>
        <img className={todo.is_complete?'priority-img priority-img-completed':'priority-img'} src={`/images/priority${todo.priority}.png`}/>
        <button onClick={this.handleClickComplete.bind(this)}>complete</button>
        <button onClick={this.handleClickDelete.bind(this)}>remove</button>
        <br/>
        </div>
    )
   } 

}
function mapStateToProps(state){
    return {
        todosSearchValue: state.todosSearchValue,
        todosPriorityValue: state.todosPriorityValue,
        todosCompletedValue: state.todosCompletedValue
    }
}
export default connect(mapStateToProps)(TodoItem)
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
        <React.Fragment>
        <div className={todo.is_complete?'todo-item completed':'todo-item'}>
            <div className ='task'><b>To do: </b>{todo.task}</div>
            <div className ='category'><b>Category: </b>{todo.category}</div>
            <div className = 'priority'><b>Priority: </b>{todo.priority}</div>
            <div className = 'due'><b>Due: </b>{todo.due_at}</div>
            <div className = 'image-wrapper'>
                <img className={todo.is_complete?'priority-img priority-img-completed':'priority-img'} src={`/images/priority${todo.priority}.png`}/>
            </div>
            <span>
            <div className='button-wrapper'>
                <button onClick={this.handleClickComplete.bind(this)} className="btn btn-primary btn-sm search-button">complete</button>
                <button onClick={this.handleClickDelete.bind(this)} className="btn btn-primary btn-sm search-button">remove</button>
            </div>
            </span>
        </div>
        <br/>
        </React.Fragment>

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
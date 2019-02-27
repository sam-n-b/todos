import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
constructor(props){
    super(props)
}
render(){
    const todos = this.props.todos
    
    return(
        todos.map((item,i)=>{
            return (
            <div className='list-row'>
            <TodoItem key ={i} todo={item}/>
            </div>
            )
        })
    )
}
}
function mapStateToProps(state) {
    return {
      todos: state.todos
    }
  }

export default connect(mapStateToProps)(TodoList)

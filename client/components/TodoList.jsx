import React from 'react'
import {connect} from 'react-redux'

class TodoList extends React.Component{
constructor(props){
    super(props)
}
render(){
    
    return(
        <p>todoList
            {console.log(this.props.todos)}
        </p>
    )
}
}
function mapStateToProps(state) {
    return {
      todos: state.todos
    }
  }

export default connect(mapStateToProps)(TodoList)

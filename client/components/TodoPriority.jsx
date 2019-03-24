import React from 'react'
import {connect} from 'react-redux'
import { getTodosPriority, changePriorityValue } from '../actions';
import TodoItem from './TodoItem'

class TodoPriority extends React.Component{
    constructor(props){
        super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        this.props.dispatch(getTodosPriority(6))
   }
   handleSubmit(event){
    event.preventDefault()
    this.props.dispatch(getTodosPriority(this.props.todosPriorityValue))
   }
   
   handleChange(event){
    //this.setState({ [event.target.name]:event.target.value})
    this.props.dispatch(changePriorityValue(event.target.value))
}

    render(){
        return(
            <React.Fragment>
                <h5>Select Priority</h5>
                <form onSubmit={this.handleSubmit}>
                <select type="number" name='priorityValue' onChange={this.handleChange} value={this.props.todosPriorityValue}>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                </select>
                <br/>
                <input type = 'submit' value="Priority 1" value='Submit'></input>
                </form>
                <p>Priotiry: {this.props.todosPriorityValue > 5 || this.props.todosPriorityValue <1 ?'':this.props.todosPriorityValue}</p>
            {this.props.todos.map((item,i)=>{
                return(
                    <div className='list-row'>
                    <TodoItem key ={i} todo={item}/>
                    </div>
                )
            })} 
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      todosPriority: state.todosPriority,
      todosPriorityValue: state.todosPriorityValue,
      todos: state.todos
    }
  }


export default connect(mapStateToProps)(TodoPriority)

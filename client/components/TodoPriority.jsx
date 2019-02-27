import React from 'react'
import {connect} from 'react-redux'
import { getTodosPriority } from '../actions';

class TodoPriority extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            priorityValue: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        this.props.dispatch(getTodosPriority(6))
   }
   handleSubmit(event){
    event.preventDefault()
    this.props.dispatch(getTodosPriority(this.state.priorityValue))
   }
   
   handleChange(event){
    this.setState({ [event.target.name]:event.target.value})
}

    render(){
        return(
            <React.Fragment>
                <h4>Priority 1-5</h4>
                <form onSubmit={this.handleSubmit}>
                <input type="number" name='priorityValue' onChange={this.handleChange} value={this.state.priorityValue}></input>
                <input type = 'submit' value="Priority 1" value='Submit'></input>
                </form>
                <p>Priotiry: {this.state.priorityValue > 5 || this.state.priorityValue <1 ?'':this.state.priorityValue}</p>
            {this.props.todosPriority.map((item,i)=>{
                return(
                <div className='list-row' key={i}>
                    <div className='todo-item'>
                    <span>Todo: {item.task}</span>
                    <span>      Category: {item.category}</span>
                    <span>      Priority: {item.priority}</span>
                    <span>      Due: {item.due_at}</span>
                    <br/>
                    </div>
                </div>
                )
            })}
                
            </React.Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
      todosPriority: state.todosPriority
    }
  }


export default connect(mapStateToProps)(TodoPriority)

//export default TodoPriority
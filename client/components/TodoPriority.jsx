import React from 'react'
import {connect} from 'react-redux'
import { getTodosPriority } from '../actions';
import TodoItem from './TodoItem'

class TodoPriority extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            priorityValue: '1'
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
                <h5>Select Priority</h5>
                <form onSubmit={this.handleSubmit}>
                <select type="number" name='priorityValue' onChange={this.handleChange} value={this.state.priorityValue}>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                </select>
                <br/>
                <input type = 'submit' value="Priority 1" value='Submit'></input>
                </form>
                <p>Priotiry: {this.state.priorityValue > 5 || this.state.priorityValue <1 ?'':this.state.priorityValue}</p>
            {this.props.todosPriority.map((item,i)=>{
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
      todosPriority: state.todosPriority
    }
  }


export default connect(mapStateToProps)(TodoPriority)

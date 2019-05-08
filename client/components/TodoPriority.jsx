import React from 'react'
import {connect} from 'react-redux'
import { getTodosPriority, changePriorityValue } from '../actions';
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
        this.props.dispatch(getTodosPriority(this.props.todosPriorityValue))
   }
   handleSubmit(event){
    event.preventDefault()
    this.props.dispatch(getTodosPriority(this.props.todosPriorityValue))
    this.setState({priorityValue: this.props.todosPriorityValue})
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
                <div className="category-search-form">
                    <select type="number" name='priorityValue' onChange={this.handleChange} value={this.props.todosPriorityValue}>
                        <option value ="1">1</option>
                        <option value ="2">2</option>
                        <option value ="3">3</option>
                        <option value ="4">4</option>
                        <option value ="5">5</option>
                    </select>
                    <input type = 'submit' value="Priority 1" value='Submit' className="btn btn-primary btn-sm search-button"></input>
                </div>
                </form>
                <p>Priotiry: {this.props.todosPriorityValue > 5 || this.props.todosPriorityValue <1 ?'':this.state.priorityValue}</p>
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
      todosPriority: state.todosPriority,
      todosPriorityValue: state.todosPriorityValue
    }
  }


export default connect(mapStateToProps)(TodoPriority)
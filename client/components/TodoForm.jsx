import React from 'react'
import {connect} from 'react-redux'
import {makeTodo} from '../api/todos'
import{getTodos} from '../actions'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task:'',
            priority:'1',
            category:'',
            is_complete:'false',
            due_at:''
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    }
handleSubmit(event){
    event.preventDefault()

    const post = {
        task: this.state.task,
        priority: this.state.priority,
        category: this.state.category,
        is_complete: false,
        due_at: this.state.due_at
    }
    console.log(post)
    makeTodo(post)
    if(this.state.task === "" || this.state.category === ""){
        alert("Please fill in New Todo and Category")
    } else {
        this.props.dispatch(getTodos())
        this.setState({
            task:'',
            priority:'1',
            category:'',
            is_complete:'false',
            due_at:''
        })
        alert("New Todo added")
    }
}
handleChange(event){
    this.setState({ [event.target.name]:event.target.value})
}

render(){
return(
    <div>
        <form onSubmit={this.handleSubmit}>
            <p>New Todo:<br/><input type='text' name ='task' onChange={this.handleChange} value={this.state.task}/></p>
            <p>Category:<br/><input type='text' name ='category'onChange={this.handleChange} value={this.state.category}/></p>
            <p>Priority (1-5):<br/><select type='text' name ='priority'onChange={this.handleChange} value={this.state.priority}>
            <option value ="1">1</option>
            <option value ="2">2</option>
            <option value ="3">3</option>
            <option value ="4">4</option>
            <option value ="5">5</option>
            </select></p>
            <p>Due:<br/><input type='date' name='due_at'onChange={this.handleChange} value={this.state.due_at}/></p>
            <p><input type='submit' value='Make Todo' className="btn btn-primary btn-md make-button"/></p>

        </form>
    </div>
)
}
}

export default connect()(TodoForm)
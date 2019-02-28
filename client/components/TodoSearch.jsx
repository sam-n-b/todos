import React from 'react'
import {connect} from 'react-redux'
import { getTodosSearch } from '../actions';

class TodoSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchValue: '',
            searchTitle: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    

   handleSubmit(event){
    event.preventDefault()
    this.props.dispatch(getTodosSearch(this.state.searchValue))
    this.setState({
        searchTitle: this.state.searchValue
    })
   }
   
   handleChange(event){
       this.setState({ [event.target.name]:event.target.value})
}

    render(){
        return(
            <React.Fragment>
                <h4>Category Search</h4>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name='searchValue' onChange={this.handleChange} value={this.state.searchValue}></input>
                <input type = 'submit' value='Submit'></input>
                </form>
                <p>Category: {this.state.searchTitle}</p>
            {this.props.todosSearch.map((item,i)=>{
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
      todosSearch: state.todosSearch
    }
  }


export default connect(mapStateToProps)(TodoSearch)

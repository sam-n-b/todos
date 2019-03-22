import React from 'react'
import {connect} from 'react-redux'
import { getTodosSearch, changeSearchValue } from '../actions';
import TodoItem from './TodoItem'


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
    this.props.dispatch(getTodosSearch(this.props.todosSearchValue))
    this.setState({
        searchTitle: this.state.searchValue
    })
   }
   
   handleChange(event){
       //this.setState({ [event.target.name]:event.target.value})
       this.props.dispatch(changeSearchValue(event.target.value))
}

    render(){
        return(
            <React.Fragment>
                <h4>Category Search</h4>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name='searchValue' onChange={this.handleChange} value={this.props.todosSearchValue}></input>
                <input type = 'submit' value='Submit'></input>
                </form>
                <p>Category: {this.state.searchTitle}</p>
            {this.props.todosSearch.map((item,i)=>{
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
      todosSearch: state.todosSearch,
      todosSearchValue: state.todosSearchValue
    }
  }


export default connect(mapStateToProps)(TodoSearch)

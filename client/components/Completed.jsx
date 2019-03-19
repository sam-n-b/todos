import React from 'react'
import {connect} from 'react-redux'
import { getTodosIsComplete } from '../actions';

class Completed extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(getTodosIsComplete(1))
    }
    render(){
        return(
            
            this.props.todosIsComplete.map((item,i)=>{
                return (
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
            })
        )
    }
}

function mapStateToProps(state) {
    return {
      todosIsComplete: state.todosIsComplete
    }
  }


export default connect(mapStateToProps)(Completed)
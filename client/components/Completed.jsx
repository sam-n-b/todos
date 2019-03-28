import React from 'react'
import {connect} from 'react-redux'
import { getTodosIsComplete, changeCompletedValue } from '../actions';
import TodoItem from './TodoItem'

class Completed extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(getTodosIsComplete(1))
        this.props.dispatch(changeCompletedValue(1))
    }
    render(){
        return(
            <React.Fragment>
                {this.props.todosIsComplete.map((item,i)=>{
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
      todosIsComplete: state.todosIsComplete,
    }
  }


export default connect(mapStateToProps)(Completed)
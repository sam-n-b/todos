import React from 'react'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import{getTodos} from '../actions'


class App extends React.Component{
constructor(props){
    super(props)
}
componentDidMount(){
    this.props.dispatch(getTodos())
}


render(){
    return(
        <TodoList/>
    )
}
}

export default connect()(App)
import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import{getTodos} from '../actions'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Nav from './Nav'
import Completed from './Completed'
import NotCompleted from './NotCompleted'
import TodoPriority from './TodoPriority'
import TodoSearch from './TodoSearch'

class App extends React.Component{
constructor(props){
    super(props)
}
componentDidMount(){
    this.props.dispatch(getTodos())
}


render(){
    return(
        <Router>
            <div className='todo-container'>
            <Nav/>
            <Route path='/forms' component={TodoForm}/>
            <Route exact path = '/' component={TodoList}/>
            <Route path='/completed' component={Completed}/>
            <Route path='/not-completed' component={NotCompleted}/>
            <Route path='/priority' component={TodoPriority} />
            <Route path='/search' component={TodoSearch} />
            </div>
        </Router>
    )
}
}

export default connect()(App)
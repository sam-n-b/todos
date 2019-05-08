import React from 'react'
import {Link} from 'react-router-dom'
function Nav(props){
return(
    <React.Fragment>
    <nav>
        <h1>To Do List</h1>
        <ul>
            <li><Link to="/forms">Add Todo</Link></li>
            <li><Link to="/">Todos</Link></li>
            <li><Link to="/not-completed">Not Completed</Link></li>
            <li><Link to="/completed">Completed</Link></li>
            <li><Link to="/priority">Priority</Link></li>
            <li><Link to="/search">Categories</Link></li>
            
        </ul>
    </nav>
    <br/>
    </React.Fragment>

)
}

export default Nav
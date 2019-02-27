import React from 'react'
import {Link} from 'react-router-dom'
function Nav(props){
return(
    <div>
        <ul>
            <li><Link to="/forms">Add Todo</Link></li>
            <li><Link to="/">Todos</Link></li>
            <li><Link to="/not-completed">Not Completed</Link></li>
            <li><Link to="/completed">Completed</Link></li>
            
        </ul>
    </div>
)
}

export default Nav
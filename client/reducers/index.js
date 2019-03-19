import {combineReducers} from 'redux'
import todos from './todos'
import todosIsComplete from './todosIsComplete'
import todosPriority from './todosPriority'
import todosSearch from './todosSearch'

const reducers =combineReducers({
todos,
todosIsComplete,
todosPriority,
todosSearch

})

export default reducers
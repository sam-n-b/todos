import {combineReducers} from 'redux'
import todos from './todos'
import todosIsComplete from './todosIsComplete'
import todosPriority from './todosPriority'

const reducers =combineReducers({
todos,
todosIsComplete,
todosPriority
})

export default reducers
import {combineReducers} from 'redux'
import todos from './todos'
import todosIsComplete from './todosIsComplete'

const reducers =combineReducers({
todos,
todosIsComplete
})

export default reducers
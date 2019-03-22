import {combineReducers} from 'redux'
import todos from './todos'
import todosIsComplete from './todosIsComplete'
import todosPriority from './todosPriority'
import todosSearch from './todosSearch'
import todosSearchValue from './todosSearchValue'
const reducers =combineReducers({
todos,
todosIsComplete,
todosPriority,
todosSearch,
todosSearchValue

})

export default reducers
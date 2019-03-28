import {combineReducers} from 'redux'
import todos from './todos'
import todosIsComplete from './todosIsComplete'
import todosPriority from './todosPriority'
import todosSearch from './todosSearch'
import todosSearchValue from './todosSearchValue'
import todosPriorityValue from './todosPriorityValue'
import todosCompletedValue from './todosCompletedValue'
const reducers =combineReducers({
todos,
todosIsComplete,
todosPriority,
todosSearch,
todosSearchValue,
todosPriorityValue,
todosCompletedValue

})

export default reducers
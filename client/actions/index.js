import {getTodos as apiGetTodos} from '../api/todos'

export function getTodos(){
 return dispatch => {
     return apiGetTodos()
     .then(todos =>{
         dispatch(saveTodos(todos))
     })
 }
}

export function saveTodos(todos){
return {
    type: 'GET_TODOS',
    todos: todos
    }
}

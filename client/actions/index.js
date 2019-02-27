import {getTodos as apiGetTodos} from '../api/todos'
import {getTodosIsComplete as apiGetTodosIsComplete} from '../api/todos'


export function getTodos(){
 return dispatch => {
     return apiGetTodos()
     .then(todos =>{
         dispatch(saveTodos(todos))
     })
 }
}

export function getTodosIsComplete(num){
    return dispatch => {
        return apiGetTodosIsComplete(num)
        .then(todosIsComplete =>{
            dispatch(saveTodosIsComplete(todosIsComplete))
        })
    }
   }

export function saveTodos(todos){
return {
    type: 'GET_TODOS',
    todos: todos
    }
}

export function saveTodosIsComplete(todosIsComplete){
    return {
        type: 'GET_TODOS_IS_COMPLETE',
        todosIsComplete: todosIsComplete
        }
    }


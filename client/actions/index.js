import {getTodos as apiGetTodos} from '../api/todos'
import {getTodosIsComplete as apiGetTodosIsComplete} from '../api/todos'
import {getTodosPriority as apigetTodosPriority} from '../api/todos'

getTodosPriority

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

export function getTodosPriority(num){
return dispatch => {
    return apigetTodosPriority(num)
    .then(todosPriority =>{
        dispatch(saveTodosPriority(todosPriority))
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

export function saveTodosPriority(todosPriority){
    return {
        type: 'GET_TODOS_PRIORITY',
        todosPriority: todosPriority
        }
    }


import {getTodos as apiGetTodos} from '../api/todos'
import {getTodosIsComplete as apiGetTodosIsComplete} from '../api/todos'
import {getTodosPriority as apigetTodosPriority} from '../api/todos'
import {getTodosSearch as apigetTodosSearch} from '../api/todos'
import {toggleTodo as apiToggleTodo} from '../api/todos'
import {deleteTodo as apiDeleteTodo} from '../api/todos'


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

export function getTodosSearch(name){
    return dispatch => {
        return apigetTodosSearch(name)
        .then(todos =>{
            dispatch(saveTodosSearch(todos))
        })
    }
    }
export function toggleTodo(id, isComplete){
    return dispatch =>{
        return apiToggleTodo(id, isComplete)
    //     .then(todos =>{
    //         dispatch(saveTodos(todos))
    // })
}}

export function deleteTodo(id){
    return dispatch =>{
        return apiDeleteTodo(id)
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

    export function saveTodosSearch(todosSearch){
        return {
            type: 'GET_TODOS_SEARCH',
            todosSearch: todosSearch
            }
        }

export function changeSearchValue(todosSearchValue){
    return{
        type: 'GET_TODOS_SEARCH_VALUE',
        todosSearchValue:todosSearchValue
    }
}

export function changePriorityValue(todosPriorityValue){
    return{
        type: 'GET_TODOS_PRIORITY_VALUE',
        todosPriorityValue: todosPriorityValue

    }
}


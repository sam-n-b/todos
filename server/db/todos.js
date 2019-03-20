const connection = require('./connection')

function getTodos(testDb){
    const db = testDb || connection
    return db('todos').select()
}

function createTodos(todo, testDb){
    const db = testDb || connection
    return db('todos').insert(todo)
}

function getTodosByPriority(priority, testDb){
    const db = testDb || connection
    return db('todos').where('todos.priority', priority)
}

function getTodosByCategory(category, testDb){
    const db = testDb || connection
    return db('todos').where('todos.category', category)
}

function getTodosByCompleted(completed, testDb){
    
    const db = testDb || connection
    return db('todos').where('todos.is_complete', completed)
}

function toggleCompleted(id, completed, testDb){
    const db = testDb || connection
    return db('todos').where('id',id).update('is_complete',completed)
}

function deleteTodo(id){
    const db = connection
    return db('todos').where('id',id).del()
}

module.exports = {
    getTodos,
    createTodos,
    getTodosByPriority,
    getTodosByCategory,
    getTodosByCompleted,
    toggleCompleted,
    deleteTodo

}
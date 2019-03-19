const express = require('express')
const router = express.Router()
const {getTodos, getTodosByPriority, getTodosByCategory, getTodosByCompleted, createTodos} = require('../db/todos')
const toggleCompleted = require('../db/todos')
const db = require('../db/todos')

//GET /api/v1/todos
router.get('/', (req, res)=>{
    getTodos()
    .then(todos => {
        res.json(todos)
    })
    .catch(err =>{
        console.log(err)
        res.setStatus(500).json({error: 'an error has occured'})
    })
})

router.get('/priority/:priority', (req, res)=>{
    const priority = req.params.priority
    getTodosByPriority(priority)
    .then(todos => {
        res.json(todos)
    })
    .catch(err =>{
        console.log(err)
        res.setStatus(500).json({error: 'an error has occured'})
    })
})

router.get('/category/:category', (req, res)=>{
    const category = req.params.category
    getTodosByCategory(category)
    .then(todos => {
        res.json(todos)
    })
    .catch(err =>{
        console.log(err)
        res.setStatus(500).json({error: 'an error has occured'})
    })
})

router.get('/completed/:completed', (req, res)=>{
    const completed = req.params.completed
    getTodosByCompleted(completed)
    .then(todos => {
        res.json(todos)
    })
    .catch(err =>{
        console.log(err)
        res.setStatus(500).json({error: 'an error has occured'})
    })
})


//POST /api/v1/todos

router.post('/', (req,res)=>{
    const todos = req.body
    createTodos(todos)
    .then(res.json({ok: 'ok'}))
})

router.post('/complete/:id/:is_complete', (req,res) => {
    var id = req.params.id
    var isComplete = null

    
    if (req.params.is_complete == 'true'){
        isComplete = true
    } else {
        isComplete = false
    }

    db.toggleCompleted(id,isComplete)
    .then((num) => {
        res.json(num)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})
module.exports = router
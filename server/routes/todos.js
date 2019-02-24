const express = require('express')
const router = express.Router()
const {getTodos, getTodosByPriority, getTodosByCategory, getTodosByCompleted} = require('../db/todos')

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


module.exports = router
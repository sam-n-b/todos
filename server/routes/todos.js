const express = require('express')
const router = express.Router()
const {getTodos} = require('../db/todos')

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



module.exports = router
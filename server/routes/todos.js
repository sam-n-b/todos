const express = require('express')
const router = express.Router()


//GET /api/v1/todos
router.get('/', (req, res)=>{
res.json([
    {
        task: "dont commit console logs",
        priority: 5,
        category: 'code',
        is_complete: false,
        due_at: 111
    },
    {
        task: "talk to rubber ducky",
        priority: 3,
        category: 'code',
        is_complete: false,
        due_at: 123  
    }
])
})



module.exports = router
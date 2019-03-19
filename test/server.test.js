const request = require('supertest')
const server = require('../server/server')

test('api route returns stuff', done =>{
    const expected = [
        {
        id: 4,
        task: "do this",
        priority: 4,
        category: "home",
        is_complete: 0,
        due_at: 1551852345
        },
        {
        id: 5,
        task: "do this",
        priority: 4,
        category: "friends",
        is_complete: 1,
        due_at: 1551655345
        }
        ]
    request(server)
    .get('/priority/4')
    .end((err,res) =>{
        expected(res.json).toBe(expected)
        done()
    })
})
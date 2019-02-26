import request from 'superagent'


export function getTodos(){
        return request.get('/api/v1/todos')
        .then(res => res.body)
    }

export function makeTodo(makeTodo){
    console.log('api hit')
    return request
    .post('/api/v1/todos')
    .send(makeTodo)
    .end((err,res)=>{
        if(err){
            console.log(err.message)
        } else {
            console.log('make todo api running')
        }
    })
}
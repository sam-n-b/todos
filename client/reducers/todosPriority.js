const initialState = []

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS_PRIORITY': 
        return action.todosPriority
        default:
        return state
    }
}
export default reducer
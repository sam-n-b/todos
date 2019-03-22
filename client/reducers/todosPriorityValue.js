const initialState = 1

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS_PRIORITY_VALUE': 
        return action.todosPriorityValue
        default:
        return state
    }
}
export default reducer
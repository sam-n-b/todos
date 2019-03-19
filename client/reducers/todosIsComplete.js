const initialState = []

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS_IS_COMPLETE': 
        return action.todosIsComplete
        default:
        return state
    }
}
export default reducer
const initialState = []

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS_SEARCH': 
        return action.todosSearch
        default:
        return state
    }
}
export default reducer
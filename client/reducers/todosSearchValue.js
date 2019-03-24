const initialState = ''

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS_SEARCH_VALUE': 
        return action.todosSearchValue
        default:
        return state
    }
}
export default reducer
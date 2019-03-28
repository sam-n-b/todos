const initialState = 0

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'CHANGE_COMPLETED_VALUE': 
        return action.todosCompletedValue
        default:
        return state
    }
}
export default reducer
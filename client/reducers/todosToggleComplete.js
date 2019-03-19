const initialState = {}
const reducer = (state = initialState, action) =>{
    switch(action,type){
        case 'TOGGLE_TODO':
        return action.toggleTodo
        default:
        return state
    }
}
const initialState = []

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TODOS': 
        return action.todos;
        break;
        case 'GET_TODOS_PRIORITY_TEST': 
        return action.todosPriority;
        break;
        default:
        return state
    }
}
export default reducer
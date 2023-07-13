const instructorReducer = (state= { data : null},action)=>{
    switch (action.type) {
        case "GET_ALL_INSTRUCTOR":
            return {...state, data: action.payload}

        default:
            return state;
    }
}

export default instructorReducer
const courseReducer = (state= { data : null},action)=>{
    switch (action.type) {
        case "GET_ALL_COURSE":
            return {...state, data: action.payload}

        default:
            return state;
    }
}

export default courseReducer
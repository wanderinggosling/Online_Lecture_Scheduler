import * as api from '../api'; 

export const getAllCourses = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getCourses();
        dispatch({type :"GET_ALL_COURSE",payload: data.courses});
        console.log(data.courses)
    } catch (error) {
        console.log(error);
    }
}
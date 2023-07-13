import * as api from '../api'; // Import your API functions

export const addInstructor = (instructorData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.AddInstructor(instructorData);
    dispatch({ type: 'ADD_INSTRUCTOR', data });
    dispatch(getAllInstructor());
    navigate('/Instructors');
  } catch (error) {
    console.log(error);
  }
};

export const getAllInstructor = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getInstructor();
        dispatch({type : "GET_ALL_INSTRUCTOR",payload: data});
    } catch (error) {
        console.log(error);
    }
}
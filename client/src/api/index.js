import axios from "axios";

const API = axios.create({baseURL:'http://localhost:8000'});

export const logIn=(authData)=>API.post('/user/login',authData);
export const signUp=(authData)=>API.post('/user/signup',authData);
export const AddInstructor=(authData)=>API.post('/user/addInstructor',authData);

export const getInstructor=()=>API.get('/instructor/getInstructor')

export const getCourses=()=>API.get('/course/getCourse')
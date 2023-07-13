import express from 'express'
import { displayInstructors } from '../controller/instructor.js'

const router= express.Router();

router.get('/getInstructor',displayInstructors);

export default router
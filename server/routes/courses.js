import express from 'express';
import { addCourse, addInstructorToLecture, displayCourses, getCourseLecturesById } from '../controller/course.js';

const router =express.Router();

router.post('/addCourse',addCourse);
router.post('/courses/:courseId/lectures/:lectureIndex/instructor',addInstructorToLecture);
router.get('/getCourse',displayCourses);
router.get('/getLecture/:courseId',getCourseLecturesById);

export default router
import Course from '../models/course.js';
import Instructor from '../models/instructor.js';

export const addCourse = async (req, res) => {
  const { name, level, description, image, lectures } = req.body;
  try {
    const newCourse = await Course.create({
      name,
      level,
      description,
      image,
      lectures: lectures.map(lecture => ({
        date: lecture.date,
        instructor: lecture.instructor,
      })),
    });

    // Update instructors table
    for (const lecture of lectures) {
      const instructor = await Instructor.findById(lecture.instructor);

      if (instructor) {
        instructor.lectures.push({ date: lecture.date, course: newCourse._id });
        await instructor.save();
      }
    }

    res.status(200).json({ result: newCourse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const addInstructorToLecture = async (req, res) => {
  const { courseId, lectureIndex, instructorId, date } = req.body;
  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    const lecture = course.lectures[lectureIndex];

    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found.' });
    }

    // Check if instructor is already assigned to another lecture on the same date
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found.' });
    }

    const conflictingLecture = instructor.lectures.find(l => l.date.toString() === date);

    if (conflictingLecture) {
      return res.status(409).json({ message: 'Instructor is already assigned to another lecture on the same date.' });
    }

    if (lecture.instructor) {
      return res.status(409).json({ message: 'Lecture already has an assigned instructor.' });
    }

    lecture.instructor = instructorId;
    lecture.date = date;

    await course.save();

    res.status(200).json({ result: course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const addLecturesToCourse = async (req, res) => {
  const { courseId, lectures } = req.body;
  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    course.lectures.push(...lectures);

    await course.save();

    res.status(200).json({ result: course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const displayCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const getCourseLecturesById = async (req, res) => {
  const courseId = req.params.id; 

  try {
    const course = await Course.findById({ _id: courseId }).select('lectures');

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    res.status(200).json({ lectures: course.lectures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};


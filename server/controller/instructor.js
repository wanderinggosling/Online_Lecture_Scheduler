import instructor from "../models/instructor.js";

export const displayInstructors = async (req, res) => {
    try {
      const instructors = await instructor.find();
      res.status(200).json({ instructors });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong.' });
    }
  };
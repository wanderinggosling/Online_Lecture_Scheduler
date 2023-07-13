import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lectures: [
      {
        date: { type: Date, required: true },
        course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
     
      },
    ],
    
  });

  export default mongoose.model('Instructor',instructorSchema)
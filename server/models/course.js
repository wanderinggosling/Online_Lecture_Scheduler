import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  lectures: [
    {
      date: { type: Date, required: true },
      instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
      // Add any additional fields for lectures as needed
    }
  ],
});

export default mongoose.model('Course',courseSchema)
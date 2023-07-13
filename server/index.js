import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import auth from './models/auth.js';
import course from './models/course.js';
import instructor from './models/instructor.js';
import userRoutes from './routes/users.js'
import courseRoutes from './routes/courses.js'
import instructorRoutes from './routes/instructor.js'


const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("online lecture api");
})

app.use('/user',userRoutes);
app.use('/course',courseRoutes);
app.use('/instructor',instructorRoutes);

const PORT = process.env.PORT || 8000

const CONNECTION_URL = "connection url"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message));

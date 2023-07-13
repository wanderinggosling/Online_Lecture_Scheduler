import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'
import instructor from '../models/instructor.js'
export const signup =async(req,res)=>{
    const {name, password, role}=req.body;
    try {
        const existinguser = await users.findOne({name});
        if(existinguser){
           return res.status(404).json({message: 'User already exist.'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({name, password: hashedPassword, role});
        if(newUser.role==='instructor'){
            await instructor.create({name, user: newUser._id});
        }
        const token = await jwt.sign({name: newUser.name, id: newUser._id}, "test", {expiresIn : "1h"});
        res.status(200).json({result : newUser, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const login =async(req,res)=>{
    const {name, password}=req.body;
    try {
       const existinguser = await users.findOne({name});
       if(!existinguser){
            return res.status(404).json({message: "User does not exist."});
       } 
       const isPasswordCrt = bcrypt.compare(password, existinguser.password);
       if(!isPasswordCrt){
            return res.status(404).json({message:"Invalid credentials."});
       }
       const token = jwt.sign({name: existinguser.name, id: existinguser._id}, "test", {expiresIn: "1h"});
       res.status(200).json({result: existinguser, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const addInstructor = async (req, res) => {
  const { name, password, role } = req.body;
  try {
    const existingUser = await users.findOne({ name });
    if (existingUser) {
      return res.status(404).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({ name, password: hashedPassword, role });

    if (newUser.role === 'instructor') {
      await instructor.create({ name, user: newUser._id });
    }

    res.status(200).json({ result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};









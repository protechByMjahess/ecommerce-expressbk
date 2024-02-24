import {Request,Response} from "express";
import {User} from '../entities/User'
 
 
 export const s_create_user = async (req:Request, res:Response)=>{
const {x,phone,age,email}=req.body;

const newuser=await User.save({
    name:x,
    phone:phone,
    age:age,
    email:email
});
return newuser;
 }
import {Request,Response} from "express";
import {User} from '../entities/User';
import {Like} from 'typeorm';
 
 
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

 export const s_all_users =async (req:Request,res:Response)=>{
    return await User.find();
 }

 export const s_user =async (req:Request,res:Response)=>{
    const user_id:any =req.params.id;
    const user = await User.findOne({where:{id:user_id}});

    if(user?.id){
        return user;
    }else{
        return null;
    }
 }

 export const s_search_user =async (req:Request,res:Response)=>{
    const { name } = req.body;
  if (name) {
    const users = await User.find({ where: { name: Like(`%${name}%`) } });
    return users;
  } else {
    return "no name to search";
  }
 }
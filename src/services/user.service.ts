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

 export const s_delete_user =async (req:Request,res:Response)=>{
    const id:any = req.params.id;
  if (id) {
    const users = await User.findOne({ where: { id:id } });
    if(users){
        await User.remove(users);
        return true;
    }else{
        return "user not found"
    }
    
  }
 }

 export const s_update_user =async (req:Request,res:Response)=>{
    const uid:any =req.params.id;
    const{name,email,phone,age}=req.body;

    if (!uid || !name || !email || !phone || !age){
        return "some data missing";
    }else{
        const x = await User.update({id:uid},{name:name, email:email, age:age, phone:phone});
        return x;
    }
 }
import {Request,Response} from "express";
import {User} from "../entities/User";
import jwt from 'jsonwebtoken';

export const s_login=async(req:Request,res:Response)=>{
    const {email,password}= req.body;
    const check_user=await User.findOne({where:{email:email,password:password}});
    if(check_user){
        const token = jwt.sign({userId:check_user.id},'youtube',{expiresIn:'1d'});
        let obj={
            user:check_user,
            token:token,
            message:'login succesfull'
        }
        return obj;
    } else{
        let obj={
            user:null,
            token:null,
            message:'login failed'
        }
        return obj;
    }
}

export const s_signup=async(req:Request,res:Response)=>{
    const {email,password, name, age, phone}= req.body;
    const check_user=await User.findOne({where:{email:email,password:password}});
    if(check_user){
        let r={
            message:'account allready exist',
            state:false
        }
        return r;
    } else{
        const user = await User.save({name:name,phone:phone,email:email,password:password,age:age});
        const token = jwt.sign({ userId: user.id }, 'youtube', { expiresIn: '10d' });
       let obj ={
        user:user,
        token:token,
        message:'create accoun succusfully'
       }
       return obj
    }
}
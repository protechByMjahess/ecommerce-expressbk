import {NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import {User} from '../entities/User';

declare global {
    namespace Express {
        interface Request {
            User_data?: User;
        }
    }
}

export const isAuthenticated=async(req:Request, res:Response,next:NextFunction)=>{
    if(!req.headers["authorization"]){
        return res.status(400).json({success:false, message:"no authorization headers available"});

    }
    const header: any= req.headers["authorization"];
    const method: string=header?.split("")[0];
    const token: string=header?.split("")[1];
    if(!method || !token) return res.status(400).json({success:false,message:"invalid auth header"});
    else if(method !== "Bearer") return res.status(400).json({success:false,message:"invalid auth method"});

    let tokenbody:any;
    try{
        tokenbody=jwt.verify(token, "youtube")
    }catch (err){
        return res.status(400).json({success:false,message:"invalid token"});
    }
    if(!tokenbody.userId) return res.status(400).json({success:false,message:"invalid token"});

    const user = await User.findOne({where:{id:tokenbody.userId}});
    if(!user) return res.status(400).json({success:false,message:"user not found"});
    else{
        req.User_data=user;
        next();
    }
}
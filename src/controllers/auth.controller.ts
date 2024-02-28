import {Request, Response} from "express";
import { s_login, s_signup } from "../services/auth.service";

export const login=async(req:Request,res:Response)=>{
    const result = await s_login(req,res)
    res.status(200).json(result)
}

export const signup=async(req:Request,res:Response)=>{
    const result=await s_signup(req,res);
    res.status(200).json(result)
}
import {Request, Response} from "express";
import { s_create_user } from "../services/user.service";

export const all_users=async (req:Request, res:Response)=>{
   res.send("helllllo fadi")
}

export const create_users=async (req:Request, res:Response)=>{
 const result = await s_create_user(req, res);
 res.json(result);
}
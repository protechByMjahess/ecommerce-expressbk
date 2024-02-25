import {Request, Response} from "express";
import { s_all_users, s_create_user, s_delete_user, s_search_user, s_user } from "../services/user.service";
import {validationResult} from "express-validator";

export const all_users=async (req:Request, res:Response)=>{
   const result = await s_all_users(req,res);
   res.json(result);
}

export const create_users=async (req:Request, res:Response)=>{
console.log("controllers");
   const errors=validationResult(req);
   if(!errors.isEmpty()){
      res.json({
         error:true,
         errors:errors.array(),
         message:"there are some validation errors"
      })
   }else{
      const result = await s_create_user(req, res);
 res.json(result);
   }

}

export const get_user=async(req:Request, res:Response)=>{
   const result=await s_user(req,res);
   res.json(result)

}

export const search_user=async(req:Request, res:Response)=>{
   const result = await s_search_user(req, res);
   res.json(result);

}

export const delete_user=async(req:Request, res:Response)=>{
   const result = await s_delete_user(req, res);
   res.json(result);

}
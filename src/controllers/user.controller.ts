import {Request, Response} from "express";
import { s_create_user } from "../services/user.service";
import {validationResult} from "express-validator";

export const all_users=async (req:Request, res:Response)=>{
   res.send("helllllo fadi")
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
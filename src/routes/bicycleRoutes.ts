import express from 'express';
import { getRepository } from 'typeorm';
import { Bicycle } from '../entities/Bicycle';
import { add_bycicle, all_bycicle, delete_bycicle, get_bycicle, s_update_bycicle, search_bicycle } from '../controllers/bycicles.controller';
import {Request, Response} from "express";
import {  userAuthenticated } from '../middleware/isAuthenticated';


export const bicycle_router = express.Router();
bicycle_router.get("/allBycicle",userAuthenticated ,all_bycicle);
bicycle_router.get("/get_bycicle/:id",get_bycicle);
bicycle_router.post("/update/:id",s_update_bycicle);
bicycle_router.post("/search",search_bicycle)

bicycle_router.post('/bicycles', add_bycicle);
bicycle_router.delete('/delete/:id', delete_bycicle);

export default bicycle_router;

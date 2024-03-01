import express from 'express';
import { getRepository } from 'typeorm';
import { Bicycle } from '../entities/Bicycle';
import { add_bycicle, all_bycicle, delete_bycicle, get_bycicle } from '../controllers/bycicles.controller';
import {Request, Response} from "express";


export const bicycle_router = express.Router();
bicycle_router.get("/allBycicle", all_bycicle);
bicycle_router.get("/get_bycicle",get_bycicle);

bicycle_router.post('/bicycles', add_bycicle);
bicycle_router.delete('/delete/:id', delete_bycicle);

export default bicycle_router;

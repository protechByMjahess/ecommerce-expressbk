import express from 'express';
import { getRepository } from 'typeorm';
import { Bicycle } from '../entities/Bicycle';
import { add_bycicle } from '../controllers/bycicles.controller';

export const bicycle_router = express.Router();

bicycle_router.post('/bicycles', add_bycicle);

export default bicycle_router;

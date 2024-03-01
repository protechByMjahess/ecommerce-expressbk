import {Request, Response} from "express";
import { Bicycle } from '../entities/Bicycle';
import { getRepository } from 'typeorm';
export const add_bycicle=async (req:Request, res:Response) => {
    try {
      const bicycleRepository = getRepository(Bicycle);
      const newBicycle = bicycleRepository.create(req.body);
      await bicycleRepository.save(newBicycle);
      res.status(201).send(newBicycle);
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to add bicycle');
    }}

    export const delete_bycicle=async (req:Request, res:Response) => {
      res.send('hello')
    }

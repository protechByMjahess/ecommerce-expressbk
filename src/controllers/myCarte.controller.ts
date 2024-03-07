// myCarte.controller.ts
import {Request, Response} from "express";
// import { Bicycle } from '../entities/Bicycle';
// import { getRepository } from 'typeorm';
import {Like} from 'typeorm';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import { Bicycle } from '../entities/Bicycle';
import { myCarte } from '../entities/myCarte.entities';

export const add_carte = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }

  try {
    const decodedToken = jwt.verify(token, 'youtube') as { userId: string };
    console.log('userId:', decodedToken.userId);
    // res.status(200).json({ userId: decodedToken.userId });

    const bicycleRepository = getRepository(myCarte);
    const newBicycle = bicycleRepository.create(req.body);
    // await bicycleRepository.save(newBicycle);
    console.log(newBicycle);
    res.send(newBicycle);


  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};









   

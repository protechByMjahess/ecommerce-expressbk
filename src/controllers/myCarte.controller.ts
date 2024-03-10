import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import {Like} from 'typeorm';


import { myCarte } from '../entities/myCarte.entities';

export const add_carte = async (req: Request, res: Response) => {
  
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    
    return res.status(401).json({ message: 'Authorization token not provided' });
  }


  try {
    const decodedToken = jwt.verify(token, 'youtube') as { userId: string };
    console.log('userId:', decodedToken.userId);

    const bicycleRepository = getRepository(myCarte);
    const products = req.body.products;
    console.log(products);

    for (const product of products) {
      const newBicycle = bicycleRepository.create({
        ...product,
        userId: decodedToken.userId,
      });
      // console.log(newBicycle);

      await bicycleRepository.save(newBicycle);
    }

    res.status(201).json({ message: 'Bicycles added successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const search_cart_history = async (req: Request, res: Response) => {
  // console.log("fhiehfuirehfiuhfiruehfiurehfiurhfihfirhf")
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided' });
  }

  try {
      const decodedToken = jwt.verify(token, 'youtube') as { userId: string };
      console.log('userId:', decodedToken.userId);

      const products = await myCarte.find({
          where: { userId: decodedToken.userId }
      });
console.log(products);
      return res.json({ data: products });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to search cart history" });
  }
};
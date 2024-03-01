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

    export const delete_bycicle = async (req: Request, res: Response) => {
      const id: any = req.params.id;
  
      if (id) {
          try {
              const bicycle = await Bicycle.findOne({ where: { id: id } });
              if (bicycle) {
                  await Bicycle.remove(bicycle);
                  res.status(200).send("Bicycle deleted successfully");
              } else {
                  res.status(404).send("Bicycle not found");
              }
          } catch (error) {
              res.status(500).send("Internal server error");
          }
      } else {
          res.status(400).send("Invalid request");
      }
  };

  export const all_bycicle=async (req:Request, res:Response) => {
    const result =  await Bicycle.find();
    res.json(result);
}
  
    

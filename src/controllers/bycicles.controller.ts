import {Request, Response} from "express";
import { Bicycle } from '../entities/Bicycle';
import { getRepository } from 'typeorm';
import {Like} from 'typeorm';

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
export const get_bycicle=async (req:Request, res:Response) => {
    
    const user_id:any =req.params.id;
    const user = await Bicycle.findOne({where:{id:user_id}});

    if(user?.id){
        res.json(user);
    }else{
        return null;
    }
}

export const s_update_bycicle =async (req:Request,res:Response)=>{
    const uid:any =req.params.id;
    const{name,description,phone,age, price, imageUrl, imageSwiper, size, condition}=req.body;

    if (!uid || !name || !description || !phone || !age || !price || !imageUrl || !imageSwiper || !size || !condition){
        return "some data missing";
    }else{
        const x = await Bicycle.update({id:uid},{name:name, description:description, age:age,condition:condition, price:price,size:size, imageUrl:imageUrl, imageSwiper:imageSwiper});
        res.json( x);
        
    }
}

export const search_bicycle = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (name) {
      const bicycles = await Bicycle.find({ where: { name: Like(`%${name}%`) } });
      return res.json(bicycles);
    } else {
      return res.status(400).json({ message: "No name to search" });
    }
  }
  
    

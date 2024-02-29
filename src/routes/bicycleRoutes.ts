import express from 'express';
import { getRepository } from 'typeorm';
import { Bicycle } from '../entities/Bicycle';

export const bicycle_router = express.Router();

bicycle_router.post('/bicycles', async (req, res) => {
  try {
    const bicycleRepository = getRepository(Bicycle);
    const newBicycle = bicycleRepository.create(req.body);
    await bicycleRepository.save(newBicycle);
    res.status(201).send(newBicycle);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to add bicycle');
  }
});

export default bicycle_router;

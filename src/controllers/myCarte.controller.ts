// myCarte.controller.ts
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const add_carte = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }

  try {
    const decodedToken = jwt.verify(token, 'youtube') as { userId: string };
    console.log('userId:', decodedToken.userId);
    res.status(200).json({ userId: decodedToken.userId });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};

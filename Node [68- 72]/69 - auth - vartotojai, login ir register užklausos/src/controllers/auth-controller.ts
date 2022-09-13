import { RequestHandler } from 'express';
import UserModel from '../models/user-model';

export const login: RequestHandler = async (req, res) => {
  try {
    const result = await UserModel.findUserByEmail('testas@gmail.com');
    console.log(result);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Serverio klaida' });
    }
  }
};

export const register: RequestHandler = async (req, res) => {
  res.send('register');
};

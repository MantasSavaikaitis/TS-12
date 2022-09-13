import { RequestHandler } from 'express';

export const login: RequestHandler = async (req, res) => {
  console.log('login');
  res.send('login');
};

export const register: RequestHandler = async (req, res) => {
  res.send('register');
};

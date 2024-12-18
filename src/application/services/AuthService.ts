import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const Admin = require('../models/AdminAuth');
const User = require('../models/UserAuth');

const authenticateToken = (type: string) => async (req: Request, res: Response, next: NextFunction) => 
{
  try 
  {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const secret = type === 'admin' ? process.env.JWT_SECRET_ADMIN : process.env.JWT_SECRET;
      const decoded: any = jwt.verify(token, secret);

      const Model = type === 'admin' ? Admin : User;
      const user = await Model.findById(decoded.id).select('-password');

      if (!user) {
          return res.status(404).json({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} not found` });
      }

      //req[type] = user;  ts should be able to acces to this point
      next();
  } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authenticateToken;

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    const validToken = verify(token, process.env.JWT_SALT);
    req['tokenData'] = validToken;
    
    next();
  } catch (error) {
    res.status(401).json("Unauthorized.");
  }
}
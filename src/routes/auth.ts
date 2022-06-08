import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

export const auth = (req: Request, res: Response) => {
  const { user, password } = req.body;

  const token = sign({
    user, password
  }, process.env.JWT_SALT, {
    expiresIn: 120,
  });

  return res.json({
    token
  })
}
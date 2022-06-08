import { Request, Response } from "express";

export const dashboard = (req: Request, res: Response) => {
  res.send({
    saldo: 13457.68,
    saldo_formatado: 'R$ 13.457,68'
  });
}
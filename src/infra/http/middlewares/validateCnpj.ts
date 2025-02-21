import { Request, Response, NextFunction } from 'express';
import { isValidCNPJ } from '../util/validators';

// Define a tipagem para o middleware
type ValidateCNPJMiddleware = (
  req: Request, // req.params contém o CNPJ
  res: Response,
  next: NextFunction,
) => void;

// Implementação do middleware
export const validateCNPJ: ValidateCNPJMiddleware = (req, res, next) => {
  const { cpfCnpj } = req.params;

  if (!isValidCNPJ(cpfCnpj)) {
    return res.status(400).json({ error: 'CNPJ inválido' });
  }

  next();
};

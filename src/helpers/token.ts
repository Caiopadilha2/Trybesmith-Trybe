import { sign } from 'jsonwebtoken';

const JWT_SECRET = 'Vasco';

const createToken = (payload: string | object) => {
  const token = sign(payload, JWT_SECRET, { algorithm: 'HS256' });
  return token;
};

export default { createToken };

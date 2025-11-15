import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export function generateToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' });
}

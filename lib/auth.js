import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

export function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

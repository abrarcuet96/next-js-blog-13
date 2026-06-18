import { jwtVerify, SignJWT } from "jose";
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const expiresIn = new TextEncoder().encode(process.env.JWT_EXPIRES_IN);

export async function generateToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn)
    .sign(SECRET);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch {
    return null;
  }
}

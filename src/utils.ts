import Token from "csrf";
const tokens = new Token();

const getToken = (secret: string) => {
  return tokens.create(secret);
};

const validateToken = (token: string, secret: string) => {
  return tokens.verify(secret, token);
};

export { getToken, validateToken };

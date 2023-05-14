// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { csrfValidator } from "../../csrf";

function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default csrfValidator(handler);

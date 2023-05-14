import { configureMiddleware } from "./middlewares";
import { TsimpleNextCSRF } from "./types";

export const simpleNextCSRF: TsimpleNextCSRF = (args) => {
  if (!args.secret) {
    throw new Error("CSRF secret is required!");
  }

  return configureMiddleware(args);
};

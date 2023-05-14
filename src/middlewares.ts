import {
  ArgsOfConfigureMiddleware,
  TMethods,
  TcsrfEnjector,
  TcsrfValidator,
} from "./types";

import Cookie from "cookies";
import { getToken, validateToken } from "./utils";

const CSRF_TOKEN_NAME = "CSRF-TOKEN";

const getErrorReponse = () => ({
  error: "CSRF token missing",
});

const defaultSecureMethods: TMethods[] = ["POST", "PATCH", "PUT"];

const configureMiddleware = (args: ArgsOfConfigureMiddleware) => {
  const {
    cookieOptions = {},
    secret,
    secureMethods = defaultSecureMethods,
  } = args;

  const csrfEnjector: TcsrfEnjector = (getServerSideProps) => {
    return async (context) => {
      const { req, res } = context;
      const cookies = new Cookie(req, res);
      const token = getToken(secret);

      cookies.set(CSRF_TOKEN_NAME, token, cookieOptions);

      return getServerSideProps(context);
    };
  };

  const csrfValidator: TcsrfValidator = (handler) => {
    return async (request, response) => {
      const method = request.method as TMethods;

      const handle = () => {
        return handler(request, response);
      };

      if (!secureMethods.includes(method)) {
        await handle();
        return;
      }

      const cookies = request.cookies;
      const token = cookies[CSRF_TOKEN_NAME];

      if (!token || !validateToken(token, secret)) {
        return response.status(401).json(getErrorReponse());
      }

      await handle();
    };
  };

  return {
    csrfEnjector,
    csrfValidator,
  };
};

export { TcsrfEnjector, TcsrfValidator, configureMiddleware };

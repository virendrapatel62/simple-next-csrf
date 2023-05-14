import { Cookie, IOptions } from "cookies";
import { GetServerSideProps, NextApiHandler } from "next";

export type TcsrfEnjector = (
  getServerSideProps: GetServerSideProps
) => GetServerSideProps;

export type TcsrfValidator = (handler: NextApiHandler) => NextApiHandler;

export type ReturnTypeOfSimpleNextCSRF = {
  csrfValidator: TcsrfValidator;
  csrfEnjector: TcsrfEnjector;
};

export type TMethods =
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "CONNECT";

export type ArgsOfSimpleNextCSRF = {
  cookieOptions?: IOptions;
  secret: string;
  secureMethods?: TMethods[];
};
export type ArgsOfConfigureMiddleware = {
  cookieOptions?: IOptions;
  secret: string;
  secureMethods?: TMethods[];
};

export type TsimpleNextCSRF = (
  args: ArgsOfSimpleNextCSRF
) => ReturnTypeOfSimpleNextCSRF;

import { simpleNextCSRF } from "./simpleNextCSRF";
import { TcsrfEnjector, TcsrfValidator } from "./middlewares";

console.log(
  simpleNextCSRF({
    cookieOptions: {},
    secret: "ss",
  })
);

export { simpleNextCSRF, TcsrfValidator, TcsrfEnjector };

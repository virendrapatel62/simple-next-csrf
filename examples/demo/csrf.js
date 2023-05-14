import { simpleNextCSRF } from "simple-next-csrf";

const { csrfEnjector, csrfValidator } = simpleNextCSRF({
  secret: "hello-world",
});

export { csrfEnjector, csrfValidator };

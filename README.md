# simple-next-csrf

This project aims to add Cross-Site Request Forgery (CSRF) protection to a Next.js application that does have server-side props support.

## Installation

```
npm install simple-next-csrf
```

## Usage

create a file named `csrf.js`

```
import { simpleNextCSRF } from "simple-next-csrf";

const { csrfEnjector, csrfValidator } = simpleNextCSRF({
  secret: "hello-world",
  // your secret from environment variable
});

export { csrfEnjector, csrfValidator };
```

in page to enject CSRF token wrap getServerSideProps in csrfEnjector

```

import { csrfEnjector } from "../csrf";

export default function Home() {

  return (
    <main>
      ....
    </main>
  );
}

export const getServerSideProps = csrfEnjector((context) => {
  return {
    props: {},
  };
});

```

Wrap api handler in csrfValidator

```
import { csrfValidator } from "../../csrf";

function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default csrfValidator(handler);

```

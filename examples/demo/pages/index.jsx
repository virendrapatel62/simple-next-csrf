import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { csrfEnjector } from "../csrf";
import axios from "axios";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [response, setResponse] = useState();

  const handleRequest = () => {
    axios.post("/api/hello").then((response) => {
      setResponse(response.data);
    });
  };

  return (
    <main>
      <h1>CSRF is enjected</h1>

      <button onClick={handleRequest}>Send HTTP Request</button>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </main>
  );
}

export const getServerSideProps = csrfEnjector((context) => {
  return {
    props: {},
  };
});

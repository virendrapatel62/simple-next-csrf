import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/users"}>
        <button>Go To Users</button>
      </Link>
    </main>
  );
}

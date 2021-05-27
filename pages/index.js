import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container h-screen mx-auto flex">
        <h1 className="text-center m-auto text-2xl font-bold">
          Welcome to LMS Platform
        </h1>
      </main>
    </div>
  );
}

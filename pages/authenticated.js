import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <section className="mainLayout h-screen">
          <div className="max-w-full h-full pb-4 ml-12 mr-12 grid grid-cols-12 bg-gray-200">
            <div className="col-span-2 h-full bg-gray-100 border-l border-r border-b border-gray-400 text-black">
              <div className="courseNav container h-1/2">
                <Sidebar></Sidebar>
              </div>
              <div className="workNav container border-t border-gray-400 h-1/2">
                <h1 className="mx-auto text-2xl font-bold text-black">
                  User Settings/Profile
                </h1>
              </div>
            </div>
            <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 border-r border-b border-gray-400 flex items-center">
              <h1 className="mx-auto text-6xl font-bold text-black">
                Main Content
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
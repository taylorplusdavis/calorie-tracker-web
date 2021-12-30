import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex bg-slate-100">
      <Head>
        <title>Calorie Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard">
        <div className="cards">
          <div className="card">
            <h1>Total Categories</h1>
            <p>10</p>
          </div>
          <div className="card">
            <h1>Total Questions</h1>
            <p>234</p>
          </div>
          <div className="card">
            <h1>Total Participant </h1>
            <p>43</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
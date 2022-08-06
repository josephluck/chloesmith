import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { projects } from "../projects";

const Home: NextPage = function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push(`/${projects[0].id}`);
  }, []);
  return (
    <div>
      <Head>
        <title>Chloe Smith</title>
      </Head>
    </div>
  );
};

export default Home;

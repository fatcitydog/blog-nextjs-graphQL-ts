import type { NextPage } from "next";
import Head from "next/head";

import { Wrapper } from "../styles/globalStyles";

import PostList from "../components/PostList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Post | Main Page</title>
        <meta name="description" content="a simple post clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <PostList />
      </Wrapper>
    </div>
  );
};

export default Home;

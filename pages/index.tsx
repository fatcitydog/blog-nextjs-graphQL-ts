import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";

export const POST_QUERY = gql`
  query {
    firstPageArticles {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`;

const Home: NextPage = () => {
  const { data } = useQuery(POST_QUERY);
  console.log(data, "data");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Your Post</title>
        <meta name="description" content="a simple post clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
};

export default Home;

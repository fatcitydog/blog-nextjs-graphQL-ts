import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Post from "./Post";
import { useFetchURL } from "./Hooks/useFetchURL";
import { MoreBox } from "../styles/globalStyles";

const POST_QUERY = gql`
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

const RETRIEVEPAGE_QUERY = gql`
  query RetrievePageArticles($page: Int!) {
    retrievePageArticles(page: $page) {
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

export default function PostList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const {
    data: firstPage,
    error: firstPageError,
    loading: firstPageLoading,
  } = useQuery(POST_QUERY);
  const {
    data: retrievePage,
    error: retrievePageError,
    loading: retrievePageLoading,
    refetch,
  } = useQuery(RETRIEVEPAGE_QUERY, {
    variables: { page: pageNumber },
  });

  // const handlePreview = () => {
  //   const link = posts.map((post) => {
  //     const imageURL = useFetchURL(post.url);
  //   });
  // };

  const handleScroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      setPageNumber((prev) => prev++);
      refetch({ page: pageNumber });
      if (!retrievePageLoading) {
        setPosts((prev) => [...prev, ...retrievePage.retrievePageArticles]);
      }
      console.log(retrievePageLoading);
    }
  };

  useEffect(() => {
    if (!firstPageLoading) {
      setPosts(firstPage.firstPageArticles);
    }
  }, [firstPageLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (posts) {
  //     handlePreview();
  //   }
  // }, [posts]);

  if (firstPageLoading) return <div>Loading...</div>;
  if (firstPageError) return <div>{`Error! ${firstPageError.message}`}</div>;

  return (
    <div>
      {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      <MoreBox>MORE...</MoreBox>
      {retrievePageLoading && <div>loading...</div>}
      {retrievePageError && <div>{`Error! ${retrievePageError.message}`}</div>}
    </div>
  );
}

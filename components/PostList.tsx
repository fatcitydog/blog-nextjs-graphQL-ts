import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Post from "./Post";
import { MoreBox } from "../styles/globalStyles";
import AddPost from "./AddPost";
import { postType } from "./Interface";
import { Header } from "../styles/globalStyles";

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
  const [posts, setPosts] = useState<postType[]>([]);
  const [ownPost, setOwnPost] = useState<postType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
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

  const handleScroll = async (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      await handleFetchData();
    }
  };

  const handleFetchData = async () => {
    setPageNumber((prePageNumber) => prePageNumber + 1);
    await refetch({ page: pageNumber });

    if (!retrievePageLoading) {
      setPosts((prev) => [...prev, ...retrievePage.retrievePageArticles]);
    } else {
      setPageNumber((prePageNumber) => prePageNumber - 1);
    }
  };

  const handleSavePost = (post: postType) => {
    setOwnPost((prev) => [...prev, post]);
  };

  useEffect(() => {
    if (!firstPageLoading) {
      setPosts(firstPage.firstPageArticles);
    }
  }, [firstPageLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [pageNumber]);

  const handleLocalStorage = (posts: postType[]) => {
    localStorage.setItem("post", JSON.stringify(posts));
  };

  useEffect(() => {
    handleLocalStorage(ownPost);
  }, [ownPost]);

  if (firstPageLoading) return <div>Loading...</div>;
  if (firstPageError || retrievePageError) return <div>Error!</div>;

  //It should be the post.id for the key but since the IDs are repeated in the data so I use index instead.
  return (
    <>
      <AddPost handleSavePost={handleSavePost} />
      <div>
        <Header>Your own Post</Header>
        {ownPost.length > 0 ? (
          ownPost.map((post: postType, index) => (
            <Post key={index} post={post} />
          ))
        ) : (
          <div>No post yet, please create your own!</div>
        )}
      </div>
      <div>
        <Header>Public Post</Header>
        {posts &&
          posts.map((post: postType, index) => (
            <Post key={index} post={post} />
          ))}
      </div>
      {retrievePageLoading && <div>Loading...</div>}
      <MoreBox>More...</MoreBox>
    </>
  );
}

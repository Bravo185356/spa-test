import { useEffect, useState } from "react";
import { IPost } from "../../model";
import { PostApi } from "../../API/PostApi";
import { Button, Container, Stack } from "react-bootstrap";
import classes from "./PostList.module.css";
import Loader from "../../UI/Loader/Loader";
import PostItem from "../PostItem/PostItem";
import { usePageLoaded } from "../../hooks/usePageLoaded";

export default function PostList() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const pageLoaded = usePageLoaded();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts(currentPage = 1) {
    const postList = await PostApi.getPosts(currentPage);
    setPosts([...posts, ...postList!]);
  }

  async function loadMorePosts() {
    setIsLoaded(true);
    setTimeout(() => setIsLoaded(false), 500);
    getPosts(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {!pageLoaded ? (
        <Loader />
      ) : (
        <Container className={classes.postsWrap}>
          <Stack className={classes.postList} gap={3}>
            {posts?.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })}
          </Stack>
          {isLoaded ? <Loader /> : <Button onClick={() => loadMorePosts()}>Загрузить ещё</Button>}
        </Container>
      )}
    </>
  );
}

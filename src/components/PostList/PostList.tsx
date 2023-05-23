import { useEffect, useState } from "react";
import { IPost } from "../../model";
import { PostApi } from "../../API/PostApi";
import { Button, Container, Stack } from "react-bootstrap";
import classes from "./PostList.module.css";
import Loader from "../../UI/Loader/Loader";
import PostItem from "../PostItem/PostItem";
import { usePageLoaded } from "../../hooks/usePageLoaded";
import { addMorePosts, getPosts } from "../../store/PostSlice/PostSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/TypedStore";

export default function PostList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value);

  const pageLoaded = usePageLoaded();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  async function loadMorePosts() {
    setIsLoaded(true);
    setTimeout(() => setIsLoaded(false), 500);
    dispatch(addMorePosts(currentPage + 1));
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {!pageLoaded ? (
        <Loader />
      ) : (
        <Container>
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

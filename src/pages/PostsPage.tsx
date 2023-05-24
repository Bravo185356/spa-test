import { useEffect } from "react";
import PostList from "../components/PostList/PostList";
import { useAppDispatch, useAppSelector } from "../hooks/TypedStore";
import { usePageLoaded } from "../hooks/usePageLoaded";
import { getPosts } from "../store/PostSlice/PostSlice";
import Loader from "../UI/Loader/Loader";
import { Container } from "react-bootstrap";

export default function PostsPage() {
  const posts = useAppSelector((state) => state.posts.value);
  const total = useAppSelector((state) => state.posts.total);
  const dispatch = useAppDispatch();

  const pageLoaded = usePageLoaded();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <Container>{!pageLoaded ? <Loader /> : <PostList total={total} posts={posts} />}</Container>;
}

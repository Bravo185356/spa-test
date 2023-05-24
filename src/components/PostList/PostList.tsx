import { useState } from "react";
import { IPost } from "../../model";
import { Button, Stack } from "react-bootstrap";
import classes from "./PostList.module.css";
import Loader from "../../UI/Loader/Loader";
import PostItem from "../PostItem/PostItem";
import { getMorePosts } from "../../store/PostSlice/PostSlice";
import { useAppDispatch } from "../../hooks/TypedStore";
import { useParams } from "react-router-dom";
import { getMoreUserPosts } from "../../store/UserSlice/UserSlice";

interface PostListProps {
  posts: IPost[];
  userList?: Boolean;
  total: number;
}

export default function PostList({ posts, userList, total }: PostListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();

  const dispatch = useAppDispatch();

  async function loadMorePosts() {
    setIsLoaded(true);
    setTimeout(() => setIsLoaded(false), 500);
    if (userList) {
      dispatch(getMoreUserPosts({ page: currentPage + 1, userId: params.id! }));
    } else {
      dispatch(getMorePosts(currentPage + 1));
    }
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <Stack className={classes.postList}>
        {posts?.map((post) => {
          return <PostItem userList={userList} key={post.id} post={post} />;
        })}
      </Stack>
      {total > posts.length && (
        <div className={classes.loadMore}>
          {isLoaded ? <Loader /> : <Button onClick={() => loadMorePosts()}>Загрузить ещё</Button>}
        </div>
      )}
    </>
  );
}

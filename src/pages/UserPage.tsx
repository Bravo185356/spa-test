import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserPosts, getUserInfo } from "../store/UserSlice/UserSlice";
import { useAppDispatch, useAppSelector } from "../hooks/TypedStore";
import { Button, Card, Container, Image } from "react-bootstrap";
import PostList from "../components/PostList/PostList";
import { usePageLoaded } from "../hooks/usePageLoaded";
import Loader from "../UI/Loader/Loader";
import userImg from "../assets/user.webp";

export default function UserPage() {
  const params = useParams();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);
  const posts = useAppSelector((state) => state.user.posts);
  const total = useAppSelector((state) => state.user.total);

  const pageLoaded = usePageLoaded();

  useEffect(() => {
    dispatch(getUserInfo(params.id!));
    dispatch(getUserPosts({ page: 1, userId: params.id! }));
  }, []);
  return (
    <Container>
      {pageLoaded ? (
        <>
          <Link to={`/`}>
            <Button>Назад</Button>
          </Link>
          <Card>
            <Image className="img" src={userImg} alt="img" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Phone: {user.phone}</Card.Text>
              <Card.Text>Site: {user.website}</Card.Text>
            </Card.Body>
          </Card>
          <PostList total={total} userList={true} posts={posts} />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

import { IPost } from "../../model";
import classes from "./PostItem.module.css";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <Card className={classes.card} key={post.id}>
      <Link to={`/user/${post.userId}`}>
        <Image className="img" src="user.webp" />
      </Link>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <Button>Комментарии</Button>
    </Card>
  );
}

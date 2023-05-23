import { useState } from "react";
import { IPost } from "../../model";
import classes from "./PostItem.module.css";
import { Button, Card, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommentList from "../CommentList/CommentList";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className={classes.card} key={post.id}>
      <Link to={`/user/${post.userId}`}>
        <Image className="img" src="user.webp" />
      </Link>
      <div className={classes.body}>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </div>
      <Button onClick={() => setShowComments(!showComments)}>Комментарии</Button>
      {showComments && <CommentList postId={post.id} />}
    </Card>
  );
}

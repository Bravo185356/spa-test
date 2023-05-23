import { useEffect, useState } from "react";
import { IComment } from "../../model";
import { CommentApi } from "../../API/CommentApi";
import CommentItem from "../CommentItem/CommentItem";
import classes from "./CommentList.module.css";
import Loader from "../../UI/Loader/Loader";

interface CommentListProps {
  postId: number;
}

export default function CommentList({ postId }: CommentListProps) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    fetchComments();
  }, []);

  async function fetchComments() {
    const commentList = await CommentApi.getComments(postId);
    setComments(commentList);
  }
  return (
    <div className={classes.list}>
      {isLoaded ? (
        comments.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

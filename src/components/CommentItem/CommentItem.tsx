import { Card } from "react-bootstrap";
import { IComment } from "../../model";

interface CommentItemProps {
  comment: IComment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Card>
      <Card.Body>
        <div>{comment.email}</div>
        <div>{comment.body}</div>
      </Card.Body>
    </Card>
  );
}

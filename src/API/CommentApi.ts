import axios from "axios";
import { IComment } from "../model";

export class CommentApi {
  static async getComments(postId: number) {
    try {
      const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

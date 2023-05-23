import axios from "axios";

export class CommentApi {
  static async getComments(postId: number) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

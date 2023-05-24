import axios from "axios";
import { IPost } from "../model";

export class PostApi {
  static async getPosts(page = 1) {
    try {
      const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?`, {
        params: { _limit: 10, _page: page },
      });
      return { posts: response.data, total: response.headers["x-total-count"] };
    } catch (error) {
      console.log(error);
    }
  }
  static async getUserPosts(page = 1, userId: string) {
    try {
      const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?`, {
        params: { userId, _limit: 10, _page: page },
      });
      return { posts: response.data, total: response.headers["x-total-count"] };
    } catch (error) {
      console.log(error);
    }
  }
}

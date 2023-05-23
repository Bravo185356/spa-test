import axios from "axios";
import { IPost } from "../model";

export class PostApi {
  static async getPosts(page = 1) {
    try {
      const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?`, { params: { _limit: 10, _page: page } });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

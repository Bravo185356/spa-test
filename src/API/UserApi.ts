import axios from "axios";
import { IUser } from "../model";

export class UserApi {
  static async getUserInfo(userId: number) {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

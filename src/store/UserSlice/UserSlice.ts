import { createAction, createSlice } from "@reduxjs/toolkit";
import { IPost, IUser } from "../../model";
import { put } from "redux-saga/effects";
import { UserApi } from "../../API/UserApi";
import { PostApi } from "../../API/PostApi";

interface UserState {
  value: IUser;
  posts: IPost[];
  total: number;
}

const initialState: UserState = {
  value: {} as IUser,
  posts: [],
  total: 0,
};

export function* fetchUser({ payload }: any): any {
  const posts = yield UserApi.getUserInfo(payload);
  yield put(setUser(posts));
}

export function* fetchUserPosts({ payload }: any): any {
  const response = yield PostApi.getUserPosts(payload?.page, payload.userId);
  yield put(setUserPosts(response));
}

export function* fetchMoreUserPosts({ payload }: any): any {
  const { posts } = yield PostApi.getUserPosts(payload.page, payload.userId);
  yield put(addMorePosts(posts));
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.value = action.payload;
    },
    setUserPosts(state, action) {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
    addMorePosts(state, action) {
      state.posts.push(...action.payload);
    },
  },
});

export const USER = "user/getUser";
export const getUserInfo = createAction<string>(USER);

export const USER_POSTS = "user/getUserPosts";
export const getUserPosts = createAction<{ page?: number; userId: string }>(USER_POSTS);

export const MORE_USER_POSTS = "user/moreUserPosts";
export const getMoreUserPosts = createAction<{ page: number; userId: string }>(MORE_USER_POSTS);

export const { setUser, setUserPosts, addMorePosts } = userSlice.actions;
export default userSlice.reducer;

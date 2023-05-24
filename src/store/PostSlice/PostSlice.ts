import { createAction, createSlice } from "@reduxjs/toolkit";
import { PostApi } from "../../API/PostApi";
import { IPost } from "../../model";
import { put } from "redux-saga/effects";

interface PostsState {
  value: IPost[];
  total: number;
}

const initialState: PostsState = {
  value: [],
  total: 0,
};

export function* fetchPostList(): any {
  const response = yield PostApi.getPosts();
  yield put(setPosts(response));
}

export function* fetchMorePosts({ payload }: any): any {
  const { posts } = yield PostApi.getPosts(payload);
  yield put(addPosts(posts));
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.value = action.payload.posts;
      state.total = action.payload.total;
    },
    addPosts(state, action) {
      state.value.push(...action.payload);
    },
  },
});

export const POSTS = "posts/getPosts";
export const getPosts = createAction(POSTS);

export const MORE_POSTS = "posts/morePosts";
export const getMorePosts = createAction<number>(MORE_POSTS);

export const { setPosts, addPosts } = postSlice.actions;
export default postSlice.reducer;

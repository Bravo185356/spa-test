import { createAction, createSlice } from "@reduxjs/toolkit";
import { PostApi } from "../../API/PostApi";
import { IPost } from "../../model";
import { put } from "redux-saga/effects";

interface PostsState {
  value: IPost[];
}

const initialState: PostsState = {
  value: [],
};

export function* getPostList(): any {
  const posts = yield PostApi.getPosts();
  yield put(setPosts(posts));
}

export function* getMorePosts({ payload }: any): any {
  const posts = yield PostApi.getPosts(payload);
  yield put(addPosts(posts));
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.value = action.payload;
    },
    addPosts(state, action) {
      state.value.push(...action.payload);
    },
  },
});

export const GET_POSTS = "posts/getPosts";
export const getPosts = createAction(GET_POSTS);

export const MORE_POSTS = "posts/morePosts";
export const addMorePosts = createAction<number>(MORE_POSTS);

export const { setPosts, addPosts } = postSlice.actions;
export default postSlice.reducer;

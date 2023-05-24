import { configureStore } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import posts, { fetchPostList, POSTS, fetchMorePosts, MORE_POSTS } from "./PostSlice/PostSlice";
import user, { USER, USER_POSTS, MORE_USER_POSTS, fetchUser, fetchUserPosts, fetchMoreUserPosts } from "./UserSlice/UserSlice";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(POSTS, fetchPostList);
  yield takeEvery(MORE_POSTS, fetchMorePosts);

  yield takeEvery(USER, fetchUser);
  yield takeEvery(USER_POSTS, fetchUserPosts);
  yield takeEvery(MORE_USER_POSTS, fetchMoreUserPosts);
}

export const store = configureStore({
  reducer: {
    posts,
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

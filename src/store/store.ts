import { configureStore } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import posts, { getPostList, GET_POSTS, getMorePosts, MORE_POSTS } from "./PostSlice/PostSlice";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_POSTS, getPostList);
  yield takeEvery(MORE_POSTS, getMorePosts);
}

export const store = configureStore({
  reducer: {
    posts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

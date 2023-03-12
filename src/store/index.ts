import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./modules/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["login", "criarconta", "recados"],
};

const persistedReducers = persistReducer(persistConfig, combineReducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: true,
  middleware: [thunk],
});

const persistor = persistStore(store);

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

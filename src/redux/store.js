import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/good_slice";

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

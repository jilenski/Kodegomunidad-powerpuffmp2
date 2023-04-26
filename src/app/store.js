import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/community/feature/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

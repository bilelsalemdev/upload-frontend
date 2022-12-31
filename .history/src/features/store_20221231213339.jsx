import { configureStore } from "@reduxjs/toolkit";
import userRegistrationReducer from "./userRegistration/userRegisrationSlice";
import userAuthenticationReducer from "./userAuthentication/userAuthenticationSlice";
export const store = configureStore({
  reducer: {
    userRegistration: userRegistrationReducer,
    userAuthentication: userAuthenticationReducer,
  },
});

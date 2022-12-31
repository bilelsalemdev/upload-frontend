import { configureStore } from "@reduxjs/toolkit";
import userRegistrationReducer from "./userRegistration/userRegisrationSlice";
export const store = configureStore({
  reducer: {
    userRegistration: userRegistrationReducer,
    userAuthentication: userAuthenticationReducer,
  },
});

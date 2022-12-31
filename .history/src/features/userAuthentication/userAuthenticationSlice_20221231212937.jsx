import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:1337/api/auth/local/register";
export const authenticate = createAsyncThunk(
  "userAuthenticationSlice/authenticate",
  async (_, thunkAPI) => {
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: `bilel${new Date().getTime()}.salem@polytechnicien.tn`,
          password: "password",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
      console.log(json);
      localStorage.setItem("token", json.jwt);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const initialState = {
  loading: true,
};
const userAuthenticationSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default userAuthenticationSlice.reducer;

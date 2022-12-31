import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:1337/api/auth/local/register";
export const authentication = createAsyncThunk(
  "userRegistration/authentication",
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
const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default userRegistrationSlice.reducer;

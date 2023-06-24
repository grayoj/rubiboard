import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
 userToken: string | null;
}

const initialState: AuthState = {
 userToken: null,
};

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  setUserToken: (state, action: PayloadAction<string | null>) => {
   state.userToken = action.payload;
  },
 },
});

export const { setUserToken } = authSlice.actions;

export default authSlice.reducer;

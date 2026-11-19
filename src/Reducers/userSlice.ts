import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface IUser {
  id: string | null;
  username: string | null;
  role: 'admin' | 'user' | null;
}

interface IUserState {
  users: IUser[];
}

const initialState: IUserState = {
  users: [
    {
      id: nanoid(),
      username: 'Администратор',
      role: 'admin',
    },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state) {
      state.users.push({
        id: nanoid(),
        username: `Новый пользователь № ${state.users.length}`,
        role: 'user',
      });
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    toggleRole(state, action: PayloadAction<string>) {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.role = user.role === 'admin' ? 'user' : 'admin';
      }
    },
  },
});

export const { addUser, removeUser, toggleRole } = userSlice.actions;
export default userSlice.reducer;
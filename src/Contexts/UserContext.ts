import { createContext } from 'react';

export interface IUser {
  id: string | null;
  username: string | null;
  role: 'admin' | 'user' | null;
}

interface IUserContext {
  user: IUser;
}

export const UserContext = createContext<IUserContext>({
  user: {
    id: null,
    username: null,
    role: null,
  },
});
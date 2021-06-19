import React from 'react';

interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const UserContext = React.createContext<IUserContext>({
  user: null,
  setUser: () => null,
});

export default UserContext;

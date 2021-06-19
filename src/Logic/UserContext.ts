import React from 'react';

/** User Context Props */
interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

/** User Context */
const UserContext = React.createContext<IUserContext>({
  user: null,
  setUser: () => null,
});

export default UserContext;

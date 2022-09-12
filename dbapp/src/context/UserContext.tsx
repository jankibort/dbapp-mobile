import { useState, createContext, FC, SetStateAction, Dispatch } from 'react';

type UserContextType = {
  loggedUser: UserType;
  setLoggedUser?: Dispatch<SetStateAction<UserType>> | void;
};

export type UserType = {
  name: string;
  token: string;
  isLogged: boolean;
};

export const INITIAL_USER = {
  name: '',
  token: '',
  isLogged: false,
};

export const UserCtxProvider: FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<UserType>(INITIAL_USER);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext<UserContextType>({
  loggedUser: INITIAL_USER,
  setLoggedUser: () => {},
});

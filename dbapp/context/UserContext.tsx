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

const initialUser = {
  name: '',
  token: '',
  isLogged: false,
};

export const UserCtxProvider: FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<UserType>(initialUser);

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
  loggedUser: initialUser,
  setLoggedUser: () => {},
});

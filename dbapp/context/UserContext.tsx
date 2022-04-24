import { useState, createContext, FC, SetStateAction, Dispatch } from 'react';

type UserContextType = {
  loggedUser?: null | UserType;
  setLoggedUser: Dispatch<SetStateAction<UserType | null>>;
};

export type UserType = {
  name: string;
  token: string;
};

export const UserCtxProvider: FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<null | UserType>(null);

  console.log(loggedUser);

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

export const UserContext = createContext<UserContextType | null>(null);

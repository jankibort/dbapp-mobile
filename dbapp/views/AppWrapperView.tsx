import { useContext } from 'react';
import { UserContext } from '../context';
import { AuthenticatedView } from './Authenticated';
import { NonAuthenticatedView } from './NonAuthenticated';

export const AppWrapperView = () => {
  const {
    loggedUser: { isLogged },
  } = useContext(UserContext);

  return <>{isLogged ? <AuthenticatedView /> : <NonAuthenticatedView />}</>;
};

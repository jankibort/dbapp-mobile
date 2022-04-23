import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { NonAuthenticatedView } from './views/NonAuthenticated/NonAuthenticatedView';
import { AuthenticatedView } from './views/Authenticated/AuthenticatedView';
import { UserContext, UserCtxProvider } from './context/UserContext';

export default function App() {
  const { loggedUser } = useContext(UserContext);
  return (
    <UserCtxProvider>
      <NavigationContainer>
        {loggedUser ? <AuthenticatedView /> : <NonAuthenticatedView />}
      </NavigationContainer>
    </UserCtxProvider>
  );
}

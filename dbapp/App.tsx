import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { NonAuthenticatedView } from './views/NonAuthenticated/NonAuthenticatedView';
import { AuthenticatedView } from './views/Authenticated/AuthenticatedView';
import { UserContext, UserCtxProvider } from './context/UserContext';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  const UserCtx = useContext(UserContext);

  return (
    <UserCtxProvider>
      <ToastProvider>
        <NavigationContainer>
          {UserCtx?.loggedUser ? (
            <AuthenticatedView />
          ) : (
            <NonAuthenticatedView />
          )}
        </NavigationContainer>
      </ToastProvider>
    </UserCtxProvider>
  );
}

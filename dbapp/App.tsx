import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { NonAuthenticatedView } from './views/NonAuthenticated/NonAuthenticatedView';
import { AuthenticatedView } from './views/Authenticated/AuthenticatedView';

export default function App() {
  const [isLogged, setLogged] = useState<boolean>(false);
  return (
    <NavigationContainer>
      {isLogged ? <AuthenticatedView /> : <NonAuthenticatedView />}
    </NavigationContainer>
  );
}

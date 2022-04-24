import { NavigationContainer } from '@react-navigation/native';
import { UserCtxProvider } from './context/UserContext';
import { ToastProvider } from 'react-native-toast-notifications';
import { AppWrapperView } from './views/AppWrapperView';

export default function App() {
  return (
    <UserCtxProvider>
      <ToastProvider>
        <NavigationContainer>
          <AppWrapperView />
        </NavigationContainer>
      </ToastProvider>
    </UserCtxProvider>
  );
}

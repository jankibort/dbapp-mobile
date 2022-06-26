import { NavigationContainer } from '@react-navigation/native';
import { UserCtxProvider, SugarCtxProvider } from './context';
import { ToastProvider } from 'react-native-toast-notifications';
import { AppWrapperView } from './views/AppWrapperView';

export default function App() {
  return (
    <UserCtxProvider>
      <SugarCtxProvider>
        <ToastProvider>
          <NavigationContainer>
            <AppWrapperView />
          </NavigationContainer>
        </ToastProvider>
      </SugarCtxProvider>
    </UserCtxProvider>
  );
}

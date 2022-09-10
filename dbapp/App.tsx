import { NavigationContainer } from '@react-navigation/native';
import { UserCtxProvider, SugarCtxProvider } from './src/context';
import { ToastProvider } from 'react-native-toast-notifications';
import { AppWrapperView } from './src/views/AppWrapperView';

// FIXME: to run mobile app `export default App()`
// export default function App() {
//   return (
//     <UserCtxProvider>
//       <SugarCtxProvider>
//         <ToastProvider>
//           <NavigationContainer>
//             <AppWrapperView />
//           </NavigationContainer>
//         </ToastProvider>
//       </SugarCtxProvider>
//     </UserCtxProvider>
//   );
// }

// FIXME: export this module instead of App() function for Storybook's component documentation instead of DBapp itself
export { default } from './src/storybook';

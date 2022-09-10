import React from 'react';
import { SignInScreen } from '../SignInScreen';
import { render } from '@testing-library/react-native';

describe('Sign In Screen', () => {
  it('should go to home screen after signing in', () => {
    const page = render(<SignInScreen />);

    const signInButton = page.getByTestId('signInButton');
  });
});

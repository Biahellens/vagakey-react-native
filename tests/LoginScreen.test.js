import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../pages/Login/LoginScreen';

test('renders login screen and submits form', () => {
  const { getByPlaceholderText, getByText } = render(<LoginScreen />);

  const emailInput = getByPlaceholderText('E-mail');
  const passwordInput = getByPlaceholderText('Senha');
  const loginButton = getByText('Login');

  fireEvent.changeText(emailInput, 'testuser@example.com');
  fireEvent.changeText(passwordInput, '123456');
  fireEvent.press(loginButton);

  expect(getByText('Bem-vindo ao VAGAKEY')).toBeTruthy();
});

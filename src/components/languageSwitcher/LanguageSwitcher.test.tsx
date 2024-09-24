import React from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import { render, fireEvent } from '@testing-library/react';
import { useTranslation } from 'react-i18next';

import store from '../../store'; // Ensure this path is correct
import LanguageSwitcher from './LanguageSwitcher';

// Mock the useRouter from next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock i18next's useTranslation
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('LanguageSwitcher', () => {
  const pushMock = jest.fn(); // Mock the router's push function

  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous mocks
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock }); // Return the mocked push function

    // Mock the implementation of useTranslation to return the necessary properties
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        changeLanguage: jest.fn().mockResolvedValue(undefined), // Mock resolved promise
      },
    });
  });

  test('changes language to English', () => {
    const { getByText } = render(
      <Provider store={store}>
        <LanguageSwitcher />
      </Provider>
    );

    fireEvent.click(getByText('English')); // Simulate click on English button
    expect(pushMock).toHaveBeenCalledWith('/en'); // Assert that push was called with /en
  });

  test('changes language to Russian', () => {
    const { getByText } = render(
      <Provider store={store}>
        <LanguageSwitcher />
      </Provider>
    );

    fireEvent.click(getByText('Russian')); // Simulate click on Russian button
    expect(pushMock).toHaveBeenCalledWith('/ru'); // Assert that push was called with /ru
  });
});

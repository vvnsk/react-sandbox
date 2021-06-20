import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello message', () => {
  render(<App />);
  const titleElement = screen.getByText(/Silicon Valley Code Camp/i);
  expect(titleElement).toBeInTheDocument();
});

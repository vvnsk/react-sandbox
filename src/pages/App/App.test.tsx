import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello message', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello/i);
  expect(helloElement).toBeInTheDocument();
});
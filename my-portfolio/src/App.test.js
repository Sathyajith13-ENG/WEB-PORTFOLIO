import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with name Sathyajith K', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Sathyajith K/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

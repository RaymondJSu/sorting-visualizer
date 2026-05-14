import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sorting visualizer controls', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /generate new array/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /merge sort/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /quick sort/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /heap sort/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /bubble sort/i })).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the text editor workspace', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /shape every word/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /enter text to edit/i })).toBeInTheDocument();
});

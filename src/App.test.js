import { render, screen } from '@testing-library/react';
import App from './App';

test('Render table with heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/User/i);

  expect(linkElement).toBeInTheDocument();
});



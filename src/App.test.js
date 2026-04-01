import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio without crashing', () => {
  render(<App />);
  // Check that the navbar brand is present
  const brandElement = screen.getByText('tomjt.com');
  expect(brandElement).toBeInTheDocument();
});

test('renders theme toggle buttons', () => {
  render(<App />);
  const toggleButtons = screen.getAllByRole('button', { name: /toggle theme/i });
  expect(toggleButtons.length).toBe(2); // desktop and mobile
});

test('renders contact section with email', () => {
  render(<App />);
  expect(screen.getByText('mail@tomjt.com')).toBeInTheDocument();
});

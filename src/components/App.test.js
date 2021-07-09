import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reaction button container', () => {
  render(<App />);
  const reactionButtonContainer = screen.getByTestId('reactionButtonContainer');
  expect(reactionButtonContainer).toBeInTheDocument();
});

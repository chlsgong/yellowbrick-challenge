import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReactionButton from './ReactionButton';

test('renders reaction button', () => {
  render(<ReactionButton />);
  expect(screen.getByTestId('reactionButton')).toBeInTheDocument();
});

test('renders reaction button text indicator', () => {
  render(<ReactionButton />);
  expect(screen.getByTestId('reactionIndicator')).toBeInTheDocument();
  expect(screen.getByTestId('reactionIndicatorIcons')).toBeInTheDocument();
  expect(screen.getByTestId('reactionIndicatorLabel')).toBeInTheDocument();
});

test('renders reaction button menu', async () => {
  render(<ReactionButton />);
  fireEvent.mouseOver(screen.getByTestId('reactionButton'));
  await waitFor(() => screen.getByTestId('reactionMenu'));

  expect(screen.getByTestId('reactionMenu')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-star')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-up')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-down')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-cash')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-wow')).toBeInTheDocument();
  expect(screen.getByTestId('reactionMenuButton-haha')).toBeInTheDocument();
});

test('render reaction menu button hint text', async () => {
  render(<ReactionButton />);
  fireEvent.mouseOver(screen.getByTestId('reactionButton'));
  await waitFor(() => screen.getByTestId('reactionMenu'));

  fireEvent.mouseOver(screen.getByTestId('reactionMenuButton-star'));
  await waitFor(() => screen.getByTestId('reactionMenuHint-star'));

  expect(screen.getByTestId('reactionMenuHint-star')).toBeInTheDocument();
});

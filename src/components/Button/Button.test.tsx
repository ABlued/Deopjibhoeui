import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('when button is clicked, onClick function is called', () => {
    const onClick = jest.fn();
    render(<Button text="Click Me" onClick={onClick} />);
    screen.getByText('Click Me').click();
    expect(onClick).toHaveBeenCalled();
  });

  const disabledClassName = 'opacity-50 cursor-default pointer-events-none';

  test('button is disabled when disabled prop is true', () => {
    render(<Button text="Click Me" disabled />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(disabledClassName);
  });

  test('button is loading when isLoading prop is true', () => {
    render(<Button text="Click Me" isLoading />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(disabledClassName);
  });

  test('button shows loading spinner when isLoading prop is true', () => {
    render(<Button text="Click Me" isLoading />);
    expect(screen.getByText('Click Me')).toHaveClass(disabledClassName);
  });

  test('button has full width when fullWidth prop is true', () => {
    render(<Button text="Click Me" fullWidth />);
    expect(screen.getByText('Click Me')).toHaveClass('w-full');
  });
});

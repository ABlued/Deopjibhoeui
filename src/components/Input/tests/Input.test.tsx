import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  test('should render input with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('should call onChange when input value changes', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChange={handleChange} />
    );
    const input = getByPlaceholderText('Enter text');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('should display error message when error is present', () => {
    const error = { isError: true, message: 'Error message' };
    const { getByText } = render(
      <Input placeholder="Enter text" error={error} />
    );
    expect(getByText('Error message')).toBeInTheDocument();
  });

  test('should display subPlaceholder when no error is present', () => {
    const { getByText } = render(
      <Input placeholder="Enter text" subPlaceholder="Sub placeholder" />
    );
    expect(getByText('Sub placeholder')).toBeInTheDocument();
  });

  test('should apply fullWidth class when fullWidth is true', () => {
    const { container } = render(<Input placeholder="Enter text" fullWidth />);
    expect(container.querySelector('input')).toHaveClass('w-full');
  });
});

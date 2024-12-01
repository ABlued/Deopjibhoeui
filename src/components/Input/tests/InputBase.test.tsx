import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputBase from '../InputBase';

describe('InputBase', () => {
  test('should render with default props', () => {
    const { getByPlaceholderText } = render(
      <InputBase placeholder="Enter text" />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  test('should apply custom className', () => {
    const { getByPlaceholderText } = render(
      <InputBase placeholder="Enter text" className="custom-class" />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toHaveClass('custom-class');
  });

  test('should handle onChange event', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputBase placeholder="Enter text" onChange={handleChange} />
    );
    const input = getByPlaceholderText('Enter text');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('should display error styles when error is true', () => {
    const { getByPlaceholderText } = render(
      <InputBase placeholder="Enter text" error={{ isError: true }} />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toHaveClass('border-error-main');
  });

  test('should be full width when fullWidth is true', () => {
    const { getByPlaceholderText } = render(
      <InputBase placeholder="Enter text" fullWidth />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toHaveClass('w-full');
  });
});

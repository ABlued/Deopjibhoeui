import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInput from '../NumberInput';

describe('NumberInput', () => {
  test('should format the value as a number with commas', () => {
    const { getByDisplayValue } = render(
      <NumberInput value="1000" onChange={() => {}} />
    );
    expect(getByDisplayValue('1,000')).toBeInTheDocument();
  });

  test('should call onChange with only numeric characters', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <NumberInput value="1000" onChange={handleChange} />
    );
    const input = getByDisplayValue('1,000');

    fireEvent.change(input, { target: { value: '1,234abc' } });
    expect(handleChange).toHaveBeenCalledWith('1234');
  });

  test('should handle empty value', () => {
    const { getByDisplayValue } = render(
      <NumberInput value="" onChange={() => {}} />
    );
    expect(getByDisplayValue('0')).toBeInTheDocument();
  });

  test('should handle non-numeric initial value', () => {
    const { getByDisplayValue } = render(
      <NumberInput value="abc" onChange={() => {}} />
    );
    expect(getByDisplayValue('0')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

describe('Select Component', () => {
  const items = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }
  ];

  test('renders placeholder correctly', () => {
    render(<Select items={items} placeholder="Select an option" />);
    expect(screen.getByLabelText('Select an option')).toBeInTheDocument();
  });

  test('renders all items correctly', () => {
    render(<Select items={items} placeholder="Select an option" />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('calls onChange when an item is selected', () => {
    const handleChange = jest.fn();
    render(
      <Select
        items={items}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByLabelText('Select an option'), {
      target: { value: '2' }
    });
    expect(handleChange).toHaveBeenCalledWith('2');
  });

  test('displays the selected item correctly', () => {
    render(
      <Select items={items} placeholder="Select an option" selected="2" />
    );
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});

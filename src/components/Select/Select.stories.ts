import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Select> = {
  component: Select
};

export default meta;

export const Default: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' }
    ]
  }
};

export const WithPlaceholder: Story = {
  args: {
    items: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' }
    ],
    placeholder: 'Select an item'
  }
};

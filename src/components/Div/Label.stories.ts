import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Label> = {
  component: Label
};

export default meta;

export const Default: Story = {
  args: {
    tag: 'tag',
    id: 'id'
  }
};

export const WithOnDelete: Story = {
  args: {
    tag: 'tag',
    id: 'id',
    onDelete: () => {
      alert('delete');
    }
  }
};

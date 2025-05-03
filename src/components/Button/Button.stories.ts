import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

export const Default: Story = {
  args: {
    text: 'Button'
  }
};

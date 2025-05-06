import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Input> = {
  component: Input
};

export default meta;

export const Default: Story = {
  args: {}
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const WithSubPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
    subPlaceholder: 'Sub Placeholder'
  }
};

export const WithError: Story = {
  args: {
    placeholder: 'Placeholder',
    error: {
      isError: true,
      message: 'Error message'
    }
  }
};

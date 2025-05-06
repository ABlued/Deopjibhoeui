import type { Meta, StoryObj } from '@storybook/react';
import NumberWithComma from './NumberWithComma';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof NumberWithComma> = {
  component: NumberWithComma
};

export default meta;

export const Default: Story = {
  args: {
    value: 1234567890
  }
};

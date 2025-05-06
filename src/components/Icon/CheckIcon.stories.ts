import type { Meta, StoryObj } from '@storybook/react';
import CheckIcon from './CheckIcon';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof CheckIcon> = {
  component: CheckIcon
};

export default meta;

export const Default: Story = {
  args: {}
};

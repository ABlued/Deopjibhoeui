import type { Meta, StoryObj } from '@storybook/react';
import Clickable from './Clickable';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Clickable> = {
  component: Clickable
};

export default meta;

export const Default: Story = {
  args: {
    children: <>clickable</>
  }
};

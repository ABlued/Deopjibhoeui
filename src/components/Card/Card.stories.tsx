import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Card> = {
  component: Card
};

export default meta;

export const Default: Story = {
  args: {
    children: <>card</>
  }
};

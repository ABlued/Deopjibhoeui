import type { Meta, StoryObj } from '@storybook/react';
import Stack from './Stack';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Stack> = {
  component: Stack
};

export default meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </>
    )
  }
};

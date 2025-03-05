import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button/Button';
import { VscAdd } from 'react-icons/vsc';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button'
  }
};

export const MiddleButton: Story = {
  args: {
    text: 'Button',
    size: 'middle'
  }
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    startIcon: () => (
      <VscAdd
        width={20}
        height={20}
        style={{
          display: 'inline'
        }}
      />
    )
  }
};

export const SmallButton: Story = {
  args: {
    text: 'Button',
    size: 'small'
  }
};

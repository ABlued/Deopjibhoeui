import { StoryObj } from '@storybook/react';
import Button from './Button';

const button = {
  title: 'Components/Buttons',
  component: Button
};

export default button;
type Story = StoryObj<typeof button>;

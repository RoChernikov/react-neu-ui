import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { TButtonProps } from './Button';

const meta: Meta = {
  title: 'Welcome',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const RegularButton = Template.bind({});

RegularButton.args = {
  onClick: () => {
    alert('CLICKED!');
  },
  children: 'Primary button',
  variant: 'primary',
};

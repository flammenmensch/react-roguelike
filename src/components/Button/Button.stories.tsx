import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'Click Me Now!',
  onClick: action('CLICK'),
};

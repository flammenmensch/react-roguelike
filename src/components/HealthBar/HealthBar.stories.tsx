import { ComponentMeta, ComponentStory } from '@storybook/react';
import HealthBar from './HealthBar';

export default {
  title: 'ui/HealthBar',
  component: HealthBar,
  argTypes: {
    maximum: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
    current: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
  },
} as ComponentMeta<typeof HealthBar>;

const Template: ComponentStory<typeof HealthBar> = (args) => (
  <HealthBar {...args} />
);

export const Example = Template.bind({});
Example.args = {
  maximum: 4,
  current: 2,
};

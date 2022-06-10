import { ComponentMeta, ComponentStory } from '@storybook/react';
import Enemy from './Enemy';

export default {
  title: 'characters/Enemy',
  component: Enemy,
  argTypes: {
    state: {
      options: ['idle', 'moving', 'hit', 'attacking', 'dead'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Enemy>;

const Template: ComponentStory<typeof Enemy> = (args) => (
  <div style={{ position: 'relative' }}>
    <Enemy {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};

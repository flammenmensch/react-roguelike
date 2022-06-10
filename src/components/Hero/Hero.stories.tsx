import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'characters/Hero',
  component: Hero,
  argTypes: {
    direction: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    gender: {
      options: ['male', 'female'],
      control: {
        type: 'inline-radio',
      },
    },
    race: {
      options: ['elf', 'knight', 'wizard', 'lizard'],
      control: {
        type: 'select',
      },
    },
    state: {
      options: ['idle', 'moving', 'hit', 'attacking', 'dead'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => (
  <div style={{ position: 'relative' }}>
    <Hero {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroSelector from './HeroSelector';

export default {
  title: 'ui/HeroSelector',
  component: HeroSelector,
} as ComponentMeta<typeof HeroSelector>;

const Template: ComponentStory<typeof HeroSelector> = (args) => (
  <HeroSelector {...args} />
);

export const Example = Template.bind({});
Example.args = {};

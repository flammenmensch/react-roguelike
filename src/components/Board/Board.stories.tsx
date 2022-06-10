import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Enemy } from '../Enemy';
import Hero from '../Hero';
import Board from './Board';

export default {
  title: 'components/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => (
  <Board {...args}>
    <Board.Layer key="floor">
      <Board.Floor />
    </Board.Layer>
    <Board.Layer key="enemies">
      <Enemy direction="left" position={{ row: 4, col: 4 }} />
    </Board.Layer>
    <Board.Layer key="hero">
      <Hero position={{ row: 2, col: 2 }} />
    </Board.Layer>
  </Board>
);

export const Example = Template.bind({});
Example.args = {
  rows: 5,
  cols: 5,
};

import React from 'react';
import { Heart, List } from './HealthBar.styles';

interface Props {
  maximum?: number;
  current?: number;
}

const HealthBar = ({ maximum = 3, current = 3 }: Props) => (
  <List>
    {Array(maximum)
      .fill(null)
      .map((_, index) => (
        <li key={index}>
          <Heart state={index < current ? 'full' : 'empty'} />
        </li>
      ))}
  </List>
);

export default React.memo(HealthBar);

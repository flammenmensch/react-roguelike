import { useState } from 'react';
import { HeroRace } from '../../domain';
import Hero from '../Hero';
import { Button, List } from './HeroSelector.styles';

interface Props {
  onSelect: (race: HeroRace) => void;
}

const HeroSelector = ({ onSelect }: Props) => {
  const [, setRace] = useState<HeroRace>('elf');

  const handleSelect = (value: HeroRace) => () => {
    onSelect(value);
    setRace(value);
  };

  return (
    <List>
      <li>
        <Button onClick={handleSelect('elf')}>
          <Hero race="elf" />
        </Button>
      </li>
      <li>
        <Button onClick={handleSelect('knight')}>
          <Hero race="knight" />
        </Button>
      </li>
      <li>
        <Button onClick={handleSelect('wizard')}>
          <Hero race="wizard" />
        </Button>
      </li>
      <li>
        <Button onClick={handleSelect('lizard')}>
          <Hero race="lizard" />
        </Button>
      </li>
    </List>
  );
};

export default HeroSelector;

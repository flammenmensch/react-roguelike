import HeroSelector from '../../components/HeroSelector';
import Button from '../../components/Button';
import { HeroRace } from '../../domain';

interface Props {
  onHeroSelect: (race: HeroRace) => void;
  onQuit: () => void;
}

const Settings = ({ onHeroSelect, onQuit }: Props) => (
  <div>
    <HeroSelector onSelect={onHeroSelect} />
    <Button label="Quit" onClick={onQuit} />
  </div>
);

export default Settings;

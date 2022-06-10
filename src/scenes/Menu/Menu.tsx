import Button from '../../components/Button';

interface Props {
  onPlay: () => void;
}

const Menu = ({ onPlay }: Props) => (
  <div>
    <Button label="Play" onClick={onPlay} />
  </div>
);

export default Menu;

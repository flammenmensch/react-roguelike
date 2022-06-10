import { useEffect } from 'react';

type AllowedKeys = 'up' | 'down' | 'left' | 'right' | 'space' | 'escape';

const useControls = (handler: (key: AllowedKeys) => void) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      event.preventDefault();
      switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          handler('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          handler('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          handler('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          handler('right');
          break;
        case ' ':
          handler('space');
          break;
        case 'Escape':
          handler('escape');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [handler]);
};

export default useControls;

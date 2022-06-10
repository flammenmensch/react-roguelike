import { useCallback } from 'react';
import { useActor } from '@xstate/react';
import { ActorRefFrom } from 'xstate';
import Hero from '../components/Hero';
import { HeroState } from '../domain';
import { createHeroMachine } from '../fsm/hero';

interface Props {
  actor: ActorRefFrom<typeof createHeroMachine>;
}

const HeroContainer = ({ actor }: Props) => {
  const [state, send] = useActor(actor);
  const handleActionEnd = useCallback(() => send('ACTION_END'), [send]);

  return (
    <Hero
      {...state.context}
      state={state.value as HeroState}
      onTransitionEnd={handleActionEnd}
      onAnimationEnd={handleActionEnd}
    />
  );
};

export default HeroContainer;

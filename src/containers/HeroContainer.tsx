import styled from 'styled-components';
import { useCallback } from 'react';
import { useActor } from '@xstate/react';
import { ActorRefFrom } from 'xstate';
import Hero from '../components/Hero';
import { HeroState } from '../domain';
import { createHeroMachine } from '../fsm/hero';

interface Props {
  actor: ActorRefFrom<typeof createHeroMachine>;
}

const Debug = styled.pre`
  position: fixed;
  top: 0;
  right: 0;
  background: #efefef;
  padding: 4px;
  font-size: 0.75rem;
  line-height: 1.5;
`;

const HeroContainer = ({ actor }: Props) => {
  const [state, send] = useActor(actor);
  const handleActionEnd = useCallback(() => send('ACTION_END'), [send]);

  return (
    <>
      <Hero
        {...state.context}
        state={state.value as HeroState}
        onTransitionEnd={handleActionEnd}
        onAnimationEnd={handleActionEnd}
      />
      <Debug>{JSON.stringify(state.context, null, 2)}</Debug>
    </>
  );
};

export default HeroContainer;

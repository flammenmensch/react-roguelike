import { useActor } from '@xstate/react';
import { ActorRefFrom } from 'xstate';
import { Enemy } from '../components/Enemy';
import { createEnemyMachine } from '../fsm/enemy';

interface Props {
  actor: ActorRefFrom<typeof createEnemyMachine>;
}

const EnemyContainer = ({ actor }: Props) => {
  const [state, send] = useActor(actor);
  return <Enemy {...state.context} state={state.value} />;
};

export default EnemyContainer;

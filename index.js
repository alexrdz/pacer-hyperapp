import {h, app} from 'hyperapp';
import state from './src/state';
import actions from './src/actions';

import GoalList from './src/components/GoalList';

const view = (state, actions) => {
  return (
    <div oncreate={actions.getGoals}>
      <h1>Pacer App</h1>
      <GoalList goals={state.goals} tasks={state.goalsTasks} />
    </div>  
  );
}

const main = app(state, actions, view, document.body);
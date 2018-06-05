import {h, app} from 'hyperapp';
import state from './src/state';
import actions from './src/actions';

import GoalList from './src/components/GoalList';
import AddGoalForm from './src/components/AddGoalForm';

const view = (state, actions) => {
console.log('state', state);
  return (
    <div oncreate={actions.getGoals}>
      <h1>Pacer App</h1>
      <GoalList goals={state.goals} tasks={state.goalsTasks} />
      <AddGoalForm />
    </div>  
  );
}

const main = app(state, actions, view, document.body);
import {h} from 'hyperapp';

const AddGoalForm = (props) => {
  const {actions: {setGoalInput, addGoal}, text} = props;

  return (
    <form>
      <h2>Add a Goal</h2>
      <input type="text" value={text} onkeyup={setGoalInput} />
      <button onclick={addGoal}>Add Goal</button>
    </form>
  )
}

const view = props => (state, actions) => {
  return <AddGoalForm actions={actions} text={state.goalInputText} />
}

export default view;
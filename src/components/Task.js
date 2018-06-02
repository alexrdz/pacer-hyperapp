import {h, app} from 'hyperapp';

const Task = (props) => {
  const {goalId, taskName, completed} = props.task;

  return (<li onclick={(e) => props.setCompleted({goalId, taskName})}>{taskName} - completed? {completed ? 'yes' : 'no'}</li>);
};

const view = props => (state, actions) => {
  return (<Task {...props} setCompleted={actions.setCompleted} />)
}

export default view;
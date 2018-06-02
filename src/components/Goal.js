import {h} from 'hyperapp';
import TasksList from './TasksList';

const Goal = (props) => {
  const {goalId, goal, tasks} = props;  

  return (
    <li>
      {goal}
      <ul>
        <TasksList key={goalId} tasks={tasks} id={goalId} />
      </ul>
    </li>
  );
};

export default Goal;
import {h} from 'hyperapp';
import Goal from './Goal';

const GoalList = (props) => {
  const {goals, tasks} = props;

  if (goals.length < 1) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <ul>
        {goals && goals.map(goal => <Goal key={goal._id} {...goal} tasks={tasks} />)}
      </ul>
    </main>
  );
};

export default GoalList;
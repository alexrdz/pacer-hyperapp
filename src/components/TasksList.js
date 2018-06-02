import {h} from 'hyperapp';
import Task from './Task';

const TasksList = (props) => {
  const {tasks, id} = props;
  
  if (tasks.length < 1) {
    return <p>Loading...</p>
  }

 
  return tasks.map((task) => {
    const tasksWithId = task.filter(t => t.goalId === id);
    
    return tasksWithId.map(t => <Task task={t} goalId={id} />)
    
  });
      


      

  
  
};

export default TasksList;
import request from '../config';

export default {
  getGoals: goals => (state, actions) => {
    const setGoals = request.getAll().then(actions.setGoals)
    const setTasks = request.getAll().then(actions.setTasks)
    return {setGoals, setTasks};
  },
  setGoals: res => {
    const goalData = res.data.entries.map(goal => ({
      goal: goal.text,
      goalId: goal._id,
      goalTasks: goal.tasks,
      created: goal._created
    }));
    return { goals: goalData }
  },
  setTasks: res => {
    const goalsTasks = res.data.entries.map(goal => {
      const tasks = goal.tasks.map(task => task.value);
      const tasksAndId = tasks.map(taskObj => Object.assign(taskObj, {goalId: goal._id}));
      return tasksAndId;
    });
    return {goalsTasks}
  },
  getCompleted: ({goalId, value: {taskName}}) => (state, actions) => {
    console.log('id', goalId, taskName);
    return actions.setCompleted({goalId, taskName});
  },
  setCompleted: ({goalId, taskName}) => state => {
    const tasksForThisGoal = state.goalsTasks.filter(tasksSet => {
      if (tasksSet[0].goalId === goalId) {
        return tasksSet;
      }
    });
    const taskToUpdate = tasksForThisGoal[0].filter(task => {
      return task.taskName === taskName
    });
    const task = taskToUpdate[0];
    const updatedTask = Object.assign(task, {completed: !task.completed });
    const updatedTasks = Object.assign(state.goalsTasks, updatedTask);

    return updatedTasks;
  },
  setGoalInput: value => (state) => {
    return {goalInputText: value.target.value}
  },
  addGoal: goalToAdd => (state) => {
    goalToAdd.preventDefault();
    
    return {goals: [...state.goals, {
      goal: state.goalInputText,
      goalId: 123123123123,
      goalTasks: [],
      created: null
    }],
    goalInputText: ''
  }
  }
};
import React from 'react';
import { useSelector } from 'react-redux';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

function GoalList() {
  const goals = useSelector((states) => states.goals); // TODO: Get goals from store;

  function onAddGoal(text) {
    // TODO: dispatch action ADD_GOAL
  }

  function onDeleteGoal(id) {
    // TODO: dispatch action DELETE_GOAL
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalList;

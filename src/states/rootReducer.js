import { todosReducer } from './todos/reducer'
import { goalsReducer } from './goals/reducer'

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}

export { rootReducer }

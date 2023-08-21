import { createStore } from './redux'

// fungsi action creator merupakan fungsi yang menghindari kesalahan-kesalahan dalam membuat objek action seperti tipo atau inkonsisten dalam menuliskan struktur propertinya
function addTodoActionCreator({ id, text }) {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false
    }
  }
}

function deleteTodoActionCreator(id) {
  return {
    type: 'DELETE_TODO',
    payload: { id }
  }
}

function toggleTodoActionCreator(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
}

// fungsi reducer sebagai perantara STATE dan ACTION, bertugas memperbarui nilai state
// membutuhkan parameter state saat ini dan parameter action untuk memanipulasi state tsb
// mengembalikan state dengan nilai yang telah diperbarui
function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload]
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id)
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete }
      }

      return todo
    })
  }

  return todos
}

function addGoalActionCreator({ id, text }) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text
    }
  };
}

function deleteGoalActionCreator(id) {
  return {
    type: 'DELETE_GOAL',
    payload: {
      id
    }
  };
}

function goalsReducer(goals = [], action = {}) {
  if (action.type === 'ADD_GOAL') {
    return [...goals, action.payload];
  }

  if (action.type === 'DELETE_GOAL') {
    return goals.filter((goal) => goal.id !== action.payload.id);
  }

  return goals;
}

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}

// consume
const store = createStore(rootReducer)

// subscribe to state changes
store.subscribe(() => {
  console.log('State changed!', store.getState())
})

store.dispatch(
  addTodoActionCreator({ id: 1, text: 'Learn React' })
)

store.dispatch(
  addTodoActionCreator({ id: 2, text: 'Learn Redux' })
)

store.dispatch(
  addTodoActionCreator({ id: 3, text: 'Learn JavaScript' })
)

// menghapus todo dengan id 3
store.dispatch(deleteTodoActionCreator(3))

// mengubah Learn React menjadi complete
store.dispatch(toggleTodoActionCreator(1))

store.dispatch(
  addGoalActionCreator({ id: 1, text: 'Get a Doctorate' })
);

store.dispatch(
  addGoalActionCreator({ id: 2, text: 'Be an Entrepreneur' })
);

store.dispatch(deleteGoalActionCreator(1));

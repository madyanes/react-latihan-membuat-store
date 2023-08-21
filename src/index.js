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

  return todos
}

// consume
const store = createStore(todosReducer)

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

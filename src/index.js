function createStore() {
  /**
   * Store memiliki 4 hal:
   * 1. State
   * 2. Mendapatkan state
   * 3. Men-subscribe perubahan state
   * 4. Memperbarui state
   */

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener)
    }
  }

  // akan men-trigger `store` untuk mengubah state sesuai dengan action yang diberikan pada argumen
  // selain itu, dispatch juga akan memanggil seluruh `listeners` dalam store dengan tujuan untuk memberitahu bahwa state dalam store berubah
  // jadi, nantinya UI bisa secara reaktif me-render setiap kali ada perubahan state
  const dispatch = (action) => {
    state = todosReducer(state, action)
    listeners.forEach((listener) => listener())
  }

  // mengembalikan objek (store)
  return {
    getState,
    subscribe,
    dispatch
  }
}

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

// fungsi reducer sebagai perantara STATE dan ACTION, bertugas memperbarui nilai state
// membutuhkan parameter state saat ini dan parameter action untuk memanipulasi state tsb
// mengembalikan state dengan nilai yang telah diperbarui
function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload]
  }

  return todos
}

// consume
const store = createStore()

// subscribe to state changes
store.subscribe(() => {
  console.log('State changed!', store.getState())
})

store.dispatch(
  addTodoActionCreator({ id: 1, text: 'Learn React' })
)

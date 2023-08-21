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

  // mengembalikan objek (store)
  return {
    getState,
    subscribe
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

// consume
const store = createStore()

// getting the state
store.getState()

// subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log('State changed.')
  console.log('UI shoud be re-rendered.')
})

// unsubscribe
unsubscribe()

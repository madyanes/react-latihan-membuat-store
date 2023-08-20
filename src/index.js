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

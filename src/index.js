function createStore() {
  /**
   * Store memiliki 4 hal:
   * 1. State
   * 2. Mendapatkan state
   * 3. Men-subscribe perubahan state
   * 4. Memperbarui state
   */

  let state

  const getState = () => state

  // mengembalikan objek (store)
  return {
    getState
  }
}

// consume
const store = createStore()

// getting the state
store.getState()

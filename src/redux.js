function createStore(reducer) {
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
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  // mengembalikan objek (store)
  return {
    getState,
    subscribe,
    dispatch
  }
}

export {
  createStore
}
